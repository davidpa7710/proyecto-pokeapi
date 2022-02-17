const express = require('express');
const centerRouter = express.Router();

centerRouter.get('/', async(req,res) => {
	res.send('hola estas en un centro pokemon')
})

module.exports = centerRouter;