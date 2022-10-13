import React, { useState } from "react";
import Panel from "./panels";
import TeamSave from "./team-save";

export default function HomePage() {
   
    const [teamInfo, setTeamInfo] = useState({
        teamName: ''
        [   
            {key: 1,
            name: '',
            id: null},
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
    })
    const teamName = () => {

    }
    

   return (
    <>
    <TeamSave teamName={teamName} /> 
    <div className='container m-0'>
         
        <div className='row spacing'>
             
            <Panel key={1} keyProp={1} setTeamInfo={setTeamInfo}/>
            <Panel key={2} keyProp={2} setTeamInfo={setTeamInfo}/>
            <Panel key={3} keyProp={3} setTeamInfo={setTeamInfo}/>
            <Panel key={4} keyProp={4} setTeamInfo={setTeamInfo}/>
            <Panel key={5} keyProp={5} setTeamInfo={setTeamInfo}/>
            <Panel key={6} keyProp={6} setTeamInfo={setTeamInfo}/>
            
        </div>
    </div>
    </>
    )}