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
// pokemonRouter.get("/", async (req, res) => {
//     const { type, evolve } = req.query;
// 	const allPokemons = await servicePokemonObject.findWithParams(type, evolve);
// 	let data = {
//         data: allPokemons,
       
//     }
// 	res.json(data);
// });
pokemonRouter.post('/', (req, res) => {
	const body = req.body;
    const pokemonCreated = servicePokemonObject.create(body);
	console.log('pokemon creado');
	res.json({
		message: 'pokemon created',
		data: pokemonCreated.data
	});
});
pokemonRouter.patch('/:id', async (req, res) => {
	const body = req.body;
	const id = req.params.id;
	const pokemonEdited = await servicePokemonObject.editPartial(id, body);
	res.json({
		message: 'updated partial',
		id,
		data: pokemonEdited
	});
});
pokemonRouter.put('/:id', async (req, res) => {
	const body = req.body;
	const id = req.params.id;
	const pokemonEditedCompleted = await servicePokemonObject.editComplete(id, body);
	res.json({
		message: 'updated all',
		id,
		data: pokemonEditedCompleted
	});
});


pokemonRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await servicePokemonObject.delete(id);
    res.json({
        message: 'deleted',
        id
    });
});



module.exports = pokemonRouter;