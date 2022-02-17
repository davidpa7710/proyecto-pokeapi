const express = require('express');
const trainerRoutes = require('./trainers/trainers.routes');
const pokemonRoutes = require('./pokemons/pokemons.routes');
const centerRoutes = require('./Pokecenters/pokecenter.routes');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/trainers', trainerRoutes);
    router.use('/pokemons', pokemonRoutes);
    router.use('/pokecenters', centerRoutes);
}

module.exports = routerApi;