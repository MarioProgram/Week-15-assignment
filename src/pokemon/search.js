import React , {useEffect, useState} from "react";


export default function Search(props) {
     const [pokemonName, setPokemonName] = useState([])
    const [search, setSearch] = useState('');
    
    const prevent = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        const getNames = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
            const json = await resp.json();      
            setPokemonName(json.results.map(e => e.name)); 
    };
    getNames();
    }, [props.xLoop])
    
    const checkKeyPress = (e) => {
        const { key, keyCode } = e;
        if (keyCode === 13) {
            e.preventDefault();
            props.getPokemon(search.toLocaleLowerCase())
        }
      };




    return (
        <div className="row spacing">
            <form className="mt-2">
                <div className="row">
                    <div className="col-sm-10 p-0" id="my-autocomplete-container"> 
                        <input className="form-control"
                           onChange={(e) => setSearch(e.target.value)}
                           placeholder='Pokemon Name'
                           onKeyDown={checkKeyPress}></input>
                    </div>
                    <div className="col-sm-1 p-0">
                        <button className="btn btn-warning" 
                        type="button" 
                        onClick={(e) => {
                            props.getPokemon(search.toLocaleLowerCase()); 
                            prevent(e);
                            }}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}