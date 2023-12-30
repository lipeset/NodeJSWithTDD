const app = require("express")();
const consign = require("consign");
const knex = require("knex");
const knexfile = require("../knexfile");
//ACONSELHAVEL DEIXAR DESLIGADO PARA NÃO SUJAR O CONSOLE
//HABILITAR QUANDO SE QUER ALGUMA INFO DE ERRO
//const knexlogger = require("knex-logger"); //LOG COM O KNEXLOGGER

// TODO criar chaveamento dinâmico
app.db = knex(knexfile.test);

//ACONSELHAVEL DEIXAR DESLIGADO PARA NÃO SUJAR O CONSOLE
//HABILITAR QUANDO SE QUER ALGUMA INFO DE ERRO
//app.use(knexlogger(app.db)); //LOG COM O KNEXLOGGER

consign({cwd: "src", verbose: false})
	.include("./configs/middlewares.js")
	.then("./routes")
	.then("./configs/routes.js")
	.into(app);

app.get("/", (req, res) => {
	res.status(200).send();
});


// LOG COM O CONSOLE.LOG - MENOS PRÁTICO E MAIS LENTO
// app.db.on("query", (query) => {
// 	console.log({sql: query.sql, bindings: query.bindings ? query.bindings.join(",") : ""})
// 		.on("query-response", response => console.log(response))
// 		.on("error", error => console.log(error));
// });

module.exports = app;