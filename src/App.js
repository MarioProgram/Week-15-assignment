
import React, {useEffect, useState} from 'react';


function App(){ 

  const [pokemonName, setPokemonName] = useState('check')
 const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
async function getName() {
  
  const getData = await fetch(url)
      .then(res => { return res.json()})
      .then (data => setPokemonName(data.name)) 
}

let nameResults = pokemonName['test']
  
useEffect(() => {
  getName()
}, []);
 
  return (
    <div className="App" >
      
        <button className='btn btn-danger' onClick={nameResults}>test</button>
        <p>{pokemonName}</p>
        
    </div>
  );
}

export default App;
