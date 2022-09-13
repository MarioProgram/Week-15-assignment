import React, { useState } from "react";
import { currentTeamInfo} from '../fetch.js/fetch-pokemon';
import SavedTeams from "./saved_teams";

export default function TeamSave() {
   
    const [teamName, setTeamName] = useState('')
    const [teamList, setTeamList] = useState([])
    
   const updateName = (x) => {
        setTeamName(x)
        currentTeamInfo[0] = teamName
   }
    const saveTeam = () => {
        // fetch(`https://crudcrud.com/api/09de1a6921d84de4b58285045b958d86/newTeam`, {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(
        //         {currentTeamInfo}
        //     )
        //     }) 
        //     fetch('https://crudcrud.com/api/09de1a6921d84de4b58285045b958d86/newTeam/631d7c4e06e25f03e8c4ecbc/testing')
        // console.log()

        // setTeamList(teamList.concat(<SavedTeams size={teamList.length} deleteTeam={deleteTeam}/>))
    }   

    // const deleteTeam = (location) => {
    //     setTeamList(teamList.filter(list => list.location !== location))
    // }

    return (
        <>
        
        <div className="customCard" >
            <div className="mx-4">
            <h5 className="card-title d-flex justify-content-center mb-3">Teams</h5>
            <h6 className="card-subtitle">Creat New Team</h6>
            <input className="form-control" placeholder="Team Name" onChange={(x) => updateName(x.target.value)}></input>
            <button className="btn btn-success mb-3" onClick={saveTeam}>Save</button>
            <h6 className="card-subtitle border-bottom border-dark">Saved teams</h6>
                <div>
                    {teamList}
              
                </div>

            </div>
      </div> 
       </>         
    )
}