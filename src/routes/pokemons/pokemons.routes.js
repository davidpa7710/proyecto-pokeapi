const express = require('express');
const pokemonRouter = express.Router();
const PokemonesServices = require('../../services/pokemons/pokemons.service');

const servicePokemonObject = new PokemonesServices();

pokemonRouter.get("/", async (req, res) => {
	const data = await servicePokemonObject.getAll();
	res.json({data});
});
pokemonRouter.get('/:id', async(req, res) => {
	const id = req.params.id;
	const data = await servicePokemonObject.findOne(id);
	res.json(data)
})
pokemonRouter.get("/", async (req, res) => {
    const { type, evolve } = req.query;

    const allPokemons = await serviceTrainerObject.find(type, evolve);

    let data = {
        data: allPokemons,
       
    }
	res.json(data);
});

pokemonRouter.get('/', async(req,res) => {
	res.send('hola soy un pokemon')
})

module.exports = pokemonRouter;