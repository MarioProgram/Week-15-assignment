import React, {useEffect, useState} from "react";
import Search from "./search";
import { fetchPokemon } from "../fetch.js/fetch-pokemon";
import PokemonData from "./pokemon-data";
import { currentTeamInfo} from '../fetch.js/fetch-pokemon';


export default function Panel(props) {

const [pokemon, setPokemon] = useState();
const [nickname, setNickname] = useState('');
const [loading, setLoading] = useState(false);
const [pokemonId, setPokemonId] = useState()

    const getPokemon = async (query) => {
        if (query === '') {
            return
        }
        else {
        setLoading(true);
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setNickname(results.name);
        setPokemonId(results.id)
        setLoading(false);
        }
    }

 

    const test = () => {
        currentTeamInfo[props.keyProp] = {
            name: nickname,
            id: pokemonId,
            key: props.keyProp
        }
        console.log(currentTeamInfo)
    }


    return (

                <div className="col-md-4 d-grid gap-3">
                <Search getPokemon={getPokemon} xLoop={true}/>
                {!loading && pokemon ? (
                    <div>
                        {test()}
                        <PokemonData 
                        
                        setNickname={setNickname}
                        name={pokemon.name} 
                        img={pokemon.sprites.front_default}
                        abilities={pokemon.abilities}
                        stats={pokemon.stats}
                        types={pokemon.types}
                        id={pokemon.id}
                        key={pokemon.id}/>
                    </div>
                ): null}
                </div>

    )
}