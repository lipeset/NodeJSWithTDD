//arquivo criado apenas para testar o JEST

test("Conhecendo as principais diretivas do JEST", () => {
	//utilizando var LET pois o valor será alterado
	let number = null;
	expect(number).toBeNull();
	number = 10;
	expect(number).not.toBeNull();
	expect(number).toBe(10);
	expect(number).toEqual(10);
	expect(number).toBeGreaterThan(9);
	expect(number).toBeLessThan(11);
});

test("Trabalhando com objetos", () => {
	const obj = {"name": "Felipe", "email": "felipe@email.com"};
	expect(obj).toHaveProperty("name");
	expect(obj).toHaveProperty("name", "Felipe");
	expect(obj.name).toBe("Felipe");

	const obj2 = {"name": "Felipe", "email": "felipe@email.com"};
	expect(obj).toBe(obj2);
	expect(obj).toEqual(obj2);
	expect(obj).toStrictEqual(obj2);
});