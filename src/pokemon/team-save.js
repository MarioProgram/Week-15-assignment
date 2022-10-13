import React, { useEffect, useState } from "react";
import { currentTeamInfo} from '../fetch.js/fetch-pokemon';
import SavedTeams from "./saved_teams";

export default function TeamSave() {
   
    const [teamName, setTeamName] = useState('');
    const [teamList, setTeamList] = useState([])
    const [teamList2, setTeamList2] = useState([])
    
   const updateName = (x) => {
        setTeamName(x)
        currentTeamInfo[0] = {TeamName: x}
   }
  
   const getFetch = (func) => {
     fetch(`https://crudcrud.com/api/ac44824b47a742619cb123938050d271/newTeam`)
        .then(res => res.json())
            .then(jsonRes => { func(jsonRes)})
           
           
   }


    const saveTeam = () => {
         fetch(`https://crudcrud.com/api/ac44824b47a742619cb123938050d271/newTeam`, {
             method: 'POST',
             headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify(
                 {currentTeamInfo}
            )
             }) 
        getFetch(setTeamList2)
        document.querySelector('.name').value = ''
    }   

  useEffect(() => {
    getFetch(setTeamList2)
    
    }
  ,[])

  function deleteTeam(id) {
    setTeamList2(teamList2.filter(x => x._id !== id));
    fetch(`https://crudcrud.com/api/ac44824b47a742619cb123938050d271/newTeam/${id}`, {
             method: 'DELETE'})
             .then(console.log('confirm delete'))
  }

    return (
        <>
        
        <div className="customCard" >
            <div className="mx-4">
            <h5 className="card-title d-flex justify-content-center mb-3">Teams</h5>
            <h6 className="card-subtitle">Creat New Team</h6>
            <input className="form-control name" placeholder="Team Name" onChange={(x) => updateName(x.target.value)}></input>
            <button className="btn btn-success mb-3" onClick={saveTeam}>Save</button>
            <h6 className="card-subtitle border-bottom border-dark">Saved teams</h6>
                <div>
                    {teamList2?.map((x, i)=>{
                        return <SavedTeams info={x} deleteTeam={deleteTeam} id={x._id}></SavedTeams>
                    })}
              
                </div>

            </div>
      </div> 
       </>         
    )
}