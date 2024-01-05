module.exports = (app) => {
	const create = (req, res) => {
		app.services.accounts.save(req.body)
			.then(result => {
				return res.status(201).json(result[0]);
			});
	};

	const findAll = (req, res) => {
		app.services.accounts.findAll()
			.then((result) => {
				return res.status(200).json(result);
			});
	};

	const get = (req, res) => {
		app.services.accounts.find({id: req.params.id})
			.then(result => res.status(200).json(result));
	};

	const update = (req, res) => {
		app.services.accounts.update(req.params.id, req.body)
			.then(result => res.status(200).json(result[0]));
	};

	return { create, findAll, get, update };
};