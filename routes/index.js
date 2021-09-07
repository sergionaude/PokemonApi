const express = require('express');
const { body } = require('express-validator');
const routes = express.Router();
const pokemonControllers = require('../controllers/PokemonControllers')

module.exports = function(){
    routes.get('/', pokemonControllers.pokemonHome );
    
    routes.post('/resultados',
        body('nombrePokemon').isJSON(),
        pokemonControllers.resultadosPokemon
    );
    
    return routes;
}
