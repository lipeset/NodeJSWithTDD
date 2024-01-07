const bodyParser = require("body-parser");
//ACONSELHAVEL DEIXAR DESLIGADO PARA NÃO SUJAR O CONSOLE
//HABILITAR QUANDO SE QUER ALGUMA INFO DE ERRO
// const knexlogger = require("knex-logger"); //LOG COM O KNEXLOGGER

module.exports = (app) => {
	app.use(bodyParser.json());
	//ACONSELHAVEL DEIXAR DESLIGADO PARA NÃO SUJAR O CONSOLE
	//HABILITAR QUANDO SE QUER ALGUMA INFO DE ERRO
	// app.use(knexlogger(app.db)); //LOG COM O KNEXLOGGER
};