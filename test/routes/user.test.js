const request = require("supertest");

const app = require("../../src/app");

test("Deve listar todos os usuários", () =>{
	return request(app).get("/users").then(res => {
		expect(res.status).toBe(200);
		expect(res.body.length).toBeGreaterThan(0);
	});
});

test("Deve inserir um usuário com sucesso", () => {
	const email = `${Date.now()}@email.com`;
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