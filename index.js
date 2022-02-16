const express = require("express");
const routerApi = require('./src/routes');
const app = express();
const port = 8008;

app.use(express.json());

app.listen(port, () => {
	console.log(`Server ok, puerto: ${port}`);
});

routerApi(app);


