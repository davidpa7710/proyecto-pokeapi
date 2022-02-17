const express = require('express');
const pokemonRouter = express.Router();
const PokemonesServices = require('../../services/pokemons/pokemons.service');

const servicePokemonObject = new PokemonesServices();

pokemonRouter.get("/", async (req, res) => {
	const data = await servicePokemonObject.getAll();
	res.json({data});
});

// pokemonRouter.get('/', async(req,res) => {
// 	res.send('hola soy un pokemon')
// })

module.exports = pokemonRouter;