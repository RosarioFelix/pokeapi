'use strict';

const filterByPokemon = (stations,query) => {
   const filterPoke = stations.filter((e) =>{
   return e.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase())!=-1;
 });
 return filterPoke;
 };
