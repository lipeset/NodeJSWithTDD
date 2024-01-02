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