import React, {useState} from "react";


export default function PokemonData(props) {

    const [name, setName] = useState(props.name)

    const percentage = (stat) => {
        let divided = (100 * stat) / 255
        return {width: `${divided}%`} 
    }
    const  cap = (string) =>  {
        return string.charAt(0).toUpperCase() + string.slice(1); //capitalize the first letter on string for better presentation
      }

    return (

            <div className="row">
                <div className="col-xs-12 col-md-12 p-0">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6 d-flex justify-content-center align-items-center ">
                                <img className="h-75 w-auto" src={props.img} alt={props.name}/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body  bg-opacity-50">
                                    <h4 className="d-flex justify-content-between" >
                                        <input className="form-control-lg w-100 border border-1  border-info fs-4" defaultValue={cap(name)} onChange={(e) => props.setNickname(e.target.value)}></input>
                                    </h4>
                                    <h5>Abilities</h5>
                                        <div className="row d-flex">
                                        {props.abilities.map((ability, key) => (
                                            <div className="col flex-fill w-auto p-0" key={key}>
                                                {ability.ability.name}
                                            </div>
                                        ))}
                                        </div>
                                    <h5>Types</h5>                                      
                                        <div className="row">
                                        {props.types.map((type, key) => (
                                            <div className="col-6" id={type.type.name} key="key">
                                                {type.type.name}
                                            </div>
                                        ))}
                                        </div>         
                                </div>
                            </div>
                            <div className="card-footer bg-opacity-50">
                            <h4>Base Stats</h4>
                            {props.stats.map((stat, key) => (
                                <div>
                                <strong>{stat.stat.name}</strong>
                                <div className="progress" key='key'>
                                    <div className="progress-bar  bg-info"  role="progressbar" style={percentage(stat.base_stat)}>{stat.base_stat}</div>
                                </div>
                                </div>
                            ))}
                        </div>
                            
                        </div>
                    </div>
                </div>

                        

            </div>


    )
}