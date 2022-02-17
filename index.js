const express = require("express");
const morgan = require('morgan');
const app = express();
const routerApi = require('./src/routes/index')

app.set('port', 8008 );
app.set('json spaces', 2);


app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({extended: false}))

app.listen(app.get('port'), () => {
	console.log(`Server ok, puerto: ${app.get('port')}`);
});

routerApi(app);


