const ValidationError = require("../errors/ValidationError");

module.exports = (app) => {
	const findAll = () => {
		return app.db("accounts")
			.select();
	};

	const save = async (account) => {
		if(!account.name) throw new ValidationError("Nome é um atributo obrigatório");
		return app.db("accounts")
			.insert(account, "*");
	};

	const find = (filter = {}) => {
		return app.db("accounts")
			.where(filter).first();
	};

	const update = (id, account) => {
		return app.db("accounts")
			.where({id})
			.update(account, "*");
	};

	const remove = (id) => {
		return app.db("accounts")
			.where({id})
			.del();
	};
	
	return {findAll, save, find, update, remove};
};
