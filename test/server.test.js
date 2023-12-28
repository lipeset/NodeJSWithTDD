const supertest = require("supertest");

const request = supertest("http://localhost:3001");

test("Deve responder na porta 3001", () => {
	//acessar a URL http://localhost:3001
	//retorno esperado: 200 (OK)
	return request.get("/").then(res => expect(res.status).toBe(200));
});