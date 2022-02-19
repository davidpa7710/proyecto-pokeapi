const axios = require('axios');

class PokemonesService {

    constructor() {

    };

    async getAll() {
        const res = await axios('http://localhost:3000/pokemons');
        const data = res.data;
        return data;
    };
    async findOne(id) {
        const res = await axios(`http://localhost:3000/pokemons/${id}`);
        const data = res.data;
        return data
    };
    async create(pokemon) {
        try {
            let newPokemon = await axios.post(`http://localhost:3000/pokemons/`, pokemon)
            return newPokemon
        } catch (error) {
            console.log(error.response);
        }
    };
    async editPartial(id, pokemon) {
        try {
            const editPokemon = await axios.put(`http://localhost:3000/pokemons/${id}`, pokemon);
            return editPokemon.data
        } catch (error) {
            console.log(error.response);
        }
    };
    async editComplete(id, body) {
        try {
            const updatedAll = await axios.patch(`http://localhost:3000/pokemons/${id}`, body);
            return updatedAll.data

        } catch (error) {
            console.log(error.response);
        }
    };
    async delete(id) {
        const res = await axios.delete(`http://localhost:3000/pokemons/${id}`);
        const data = res.data
        return data
    };

}

module.exports = PokemonesService;