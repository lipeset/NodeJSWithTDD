const request = require("supertest");

const app = require("../../src/app");

const email = `${Date.now()}@email.com`;

test("Deve listar todos os usuários", () =>{
	return request(app).get("/users").then(res => {
		expect(res.status).toBe(200);
		expect(res.body.length).toBeGreaterThan(0);
	});
});

test("Deve inserir um usuário com sucesso", () => {
	return request(app)
		.post("/users")
		.send({
			name: "Felipe Almeida",
			email,
			password: "1337"
		})
		.then(res => {
			expect(res.status).toBe(201);
			expect(res.body.name).toBe("Felipe Almeida");
		});
});

/* FORMAS DE TRABALHAR COM REQUISIÇÕES ASSÍNCRONAS ATÉ QUE TENHAM SIDO RESOLVIDAS */

// UTILIZANDO O .THEN()
test("Não deve inserir usuário sem nome", () => {
	return request(app).post("/users")
		.send({
			email: "teste@email.com",
			password: "1337"
		})
		.then((res) => {
			expect(res.status).toBe(400);
			expect(res.body.error).toBe("Nome é um atributo obrigatório");
		});
});

// UTILIZANDO ASYNC/AWAIT
test("Não deve inserir usuário sem email", async () => {
	const result = await request(app).post("/users")
		.send({
			name: "Felipe Almeida",
			password: "1337"
		});
	expect(result.status).toBe(400);
	expect(result.body.error).toBe("Email é um atributo obrigatório");
});

// UTILIZANDO O DONE()
test("Não deve inserir usuário sem senha", (done) => {
	request(app).post("/users")
		.send({
			name: "Felipe Almeida",
			email: "teste@email.com"
		}).then((res) => {
			expect(res.status).toBe(400);
			expect(res.body.error).toBe("Senha é um atributo obrigatório");
			done();
		}).catch(err => done.fail(err));
});

test("Não deve inserir usuário com email existente", () => {
	return request(app).post("/users")
		.send({
			name: "Felipe Almeida",
			email,
			password: "1337"
		})
		.then(res => {
			expect(res.status).toBe(400);
			expect(res.body.error).toBe("Já existe um usuário com este email");
		});
});