const app = require("express")();
const consign = require("consign");

consign({cwd: "src", verbose: false})
	.include("./configs/middlewares.js")
	.then("./routes")
	.then("./configs/routes.js")
	.into(app);

app.get("/", (req, res) => {
	res.status(200).send();
});



module.exports = app;