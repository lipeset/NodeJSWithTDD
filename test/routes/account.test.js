const request = require("supertest");
const app = require("../../src/app");

const MAIN_ROUTE = "/accounts";
let user;

beforeAll(async () => {
	const res = await app.services.user.save({
		name: "User account",
		email: `${Date.now()}@email.com`,
		password: "1337"
	});
	user = { ...res[0] };
});

test("Deve inserir uma conta com sucesso", () => {
	return request(app).post(MAIN_ROUTE)
		.send({name: "Acc 01", user_id: user.id})
		.then(result => {
			expect(result.status).toBe(201);
			expect(result.body.name).toBe("Acc 01");
		});
});

test("Não deve inserir uma conta sem nome", () => {
	return request(app).post(MAIN_ROUTE)
		.send({user_id: user.id})
		.then(result => {
			expect(result.status).toBe(400);
			expect(result.body.error).toBe("Nome é um atributo obrigatório");
		});
});

// TODO montar teste de NOME DUPLICADO após criar autenticação
test.skip("Não deve inserir conta com nome duplicado para o mesmo usuário", () => {});

test("Deve listar todas as contas", () => {
	return app.db("accounts")
		.insert({name: "Acc list", user_id: user.id})
		.then(() => request(app).get(MAIN_ROUTE))
		.then(result => {
			expect(result.status).toBe(200);
			expect(result.body.length).toBeGreaterThan(0);
		});
});

// TODO montar teste de MOSTRAR APENAS CONTA DO USUÁRIO após criar autenticação
test.skip("Deve listar apenas as contas do usuário", () => {});

test("Deve retornar uma conta por ID", () => {
	return app.db("accounts")
		.insert({name: "Acc by Id", user_id: user.id}, ["id"])
		.then(acc => request(app).get(`${MAIN_ROUTE}/${acc[0].id}`))
		.then(res => {
			expect(res.status).toBe(200);
			expect(res.body.name).toBe("Acc by Id");
			expect(res.body.user_id).toBe(user.id);
		});
});

// TODO montar teste de NÃO MOSTRAR CONTA DE OUTRO USUÁRIO após criar autenticação
test.skip("Não deve retornar uma conta de outro usuário", () => {});

test("Deve alterar uma conta", () => {
	return app.db("accounts")
		.insert({name: "Acc to Update", user_id: user.id}, ["id"])
		.then(acc => request(app).put(`${MAIN_ROUTE}/${acc[0].id}`)
			.send({name: "Acc Updated"}))
		.then((res) => {
			expect(res.status).toBe(200);
			expect(res.body.name).toBe("Acc Updated");
		});
});

// TODO montar teste de NÃO ALTERAR CONTA DE OUTRO USUÁRIO após criar autenticação
test.skip("Não deve alterar uma conta de outro usuário", () => {});

test("Deve remover uma conta", () => {
	return app.db("accounts")
		.insert({name: "Acc to remove", user_id: user.id}, ["id"])
		.then(acc => request(app).delete(`${MAIN_ROUTE}/${acc[0].id}`))
		.then(res => {
			expect(res.status).toBe(204);
		});
});

// TODO montar teste de NÃO REMOVER CONTA DE OUTRO USUÁRIO após criar autenticação
test.skip("Não deve remover uma conta de outro usuário", () => {});