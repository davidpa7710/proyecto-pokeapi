const express = require('express');
const trainerRoutes = require('./trainers/trainers.service');
const pokemonRoutes = require('./pokemons/pokemons.service');

function routerApi(app) {
    const router = express.Router();
    app.use('api/v1', router)
    router.use('/trainers', trainerRoutes);
    router.use('/pokemones', pokemonRoutes);
}

module.exports = routerApi;