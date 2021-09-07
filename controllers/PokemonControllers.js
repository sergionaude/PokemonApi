const { response, request } = require("express");
const axios = require('axios');
const pokemonModel = require('../models/pokemon');

exports.pokemonHome = (req, resp) => {
    resp.render('index',{
        nombreProyecto: 'Sergio',
    });
}

exports.resultadosPokemon = async (req, resp) => {
    console.log(req.body.nombrePokemon);
    let pokemon = req.body.nombrePokemon; 

    try{
        const datosPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const {name, height, weight, id, sprites, types, abilities, moves} = datosPokemon.data;    
        pokemonModel.nombre = name;
        pokemonModel.peso = weight;
        pokemonModel.tipo = types[0].type.name;
        pokemonModel.altura = height;
        pokemonModel.imagenFront = sprites.front_default
        pokemonModel.imagenBack = sprites.back_default; 
        pokemonModel.imagenMuestra = true;
        pokemonModel.idp = id
        pokemonModel.habilidad = (abilities[0].ability.name);

        let i = 0
        while( i < 4 ){
            pokemonModel.movimientos.unshift(moves[i].move.name);
            pokemonModel.urlMovimientos.unshift(moves[i].move.url);                        
            i++
        }        
        const datosMovimiento1 = await axios.get(pokemonModel.urlMovimientos[0]);
        pokemonModel.descMovimientos[0] = datosMovimiento1.data.flavor_text_entries[0].flavor_text;
        
        const datosMovimiento2 = await axios.get(pokemonModel.urlMovimientos[1]);
        pokemonModel.descMovimientos[1] = datosMovimiento2.data.flavor_text_entries[1].flavor_text;

        const datosMovimiento3 = await axios.get(pokemonModel.urlMovimientos[2]);        
        pokemonModel.descMovimientos[2] = datosMovimiento3.data.flavor_text_entries[2].flavor_text;


        console.log(pokemonModel.tipo);

        switch (pokemonModel.tipo) {
            case 'grass':
                pokemonModel.colorTipo = 'green';
                break;
            case 'fire':
                pokemonModel.colorTipo = 'red';
                break;
            case 'water':
                pokemonModel.colorTipo = 'blue';
                break;
            case 'normal':
                pokemonModel.colorTipo = 'gray';
                break;
            case 'flying':
                pokemonModel.colorTipo = 'teal';
                break;
            case 'bug':
                pokemonModel.colorTipo = 'olive';
                break;
            case 'poison':
                pokemonModel.colorTipo = 'purple';
                break;
            case 'electric':
                pokemonModel.colorTipo = 'yellow';
                break;
            case 'fighting':
                pokemonModel.colorTipo = 'DarkRed';
                break;
            case 'psychic':
                pokemonModel.colorTipo = 'MediumVioletRed';
                break;
            case 'rock':
                pokemonModel.colorTipo = 'brown';
                break;
            case 'ice':
                pokemonModel.colorTipo = 'LightSeaGreen';
                break;
            case 'ghost':
                pokemonModel.colorTipo = 'DarkMagenta';
                break;
            case 'dragon':
                pokemonModel.colorTipo = 'Indigo';
                break;
            case 'dark':
                pokemonModel.colorTipo = 'SaddleBrown';
                break;
            case 'steel':
                pokemonModel.colorTipo = 'DarkSlateGray';
                break;
            case 'fairy':
                pokemonModel.colorTipo = 'HotPink';
                break;            
            
            default:
                pokemonModel.colorTipo = 'black';                
        }

        console.log(pokemonModel);   

        


        
        resp.render('index',{
            pokemonModel
        });    
    }

    catch(error){
        console.log(error);
        const mensaje = "Pokemon no encontrado, puedes intentar con otro"
        resp.render('index',{
            pokemonModel,
            error,
            mensaje,
        });    
    }