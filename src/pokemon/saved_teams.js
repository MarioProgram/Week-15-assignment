import React from "react";


export default function SavedTeams(props) {

   

    return(
        <div className="mb-2">
        <button className="mx-3 w-auto  btn btn-info">{props.info.currentTeamInfo[0].TeamName}</button>   
        <button className="btn btn-danger btn-sm" onClick={() => props.deleteTeam(props.id)}> Delete</button> 
        </div>
    )
}