const mainUrl =  'https://pokeapi.co/api/v2';
const query = {
    pokemon: 'pokemon'
}
const nameUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
export const pokemonNameArray = [];

export function infoGrab(id, name, spot) {
    console.log(id, name, spot)
}

export async function fetchPokemon(pokemon) {
   return fetch(`${mainUrl}/${query.pokemon}/${pokemon}`)
}
export const currentTeamInfo = [
    {teamName: 'test'},   
    {key: 1,
    name: 'test',
    id: 35},
    {key: 2,
    name: '',
    id: null},  
    {key: 3,
    name: '',
    id: null},
    {key: 4,
    name: '',
    id: null},
    {key: 5,
    name: '',
    id: null},
    {key: 6,
    name: '',
    id: null}
    
]