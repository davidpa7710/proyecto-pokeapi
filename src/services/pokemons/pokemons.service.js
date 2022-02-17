const axios = require('axios');

class PokemonesService {
    
    constructor() {

    }

    async getAll() {
        const res = await axios('http://localhost:8008/pokemons');
        const data = res.data;
        return data;
    }

}

module.exports = PokemonesService;