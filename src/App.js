import React, { useState } from 'react';
import Form from './components/Form'
import Team from './components/Team'
import Data from './components/Data'
import './App.css';
import styled from "styled-components";



const Div = styled.div`
width:100%auto;

.App{
  border: 1px solid #ff65a3;
  width:55%;
  margin:0 auto;
}


h1 {
  font-size:30px;


}

div  {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
}

`;


function App() {
    const [teamMembers,setTeamMembers] =useState(Data)

    const newTeam = (any) =>{
         const TeamMate = {
              name: any.name,
              role: any.role,
              email: any.email
         }
         setTeamMembers([...teamMembers, TeamMate])



    }



  return (
    <Div>
    <div className="header">
      <h1> This Is Our Team!</h1>
    </div>

    <div className="App">
     <Team members={teamMembers}/>
    </div>
    <div className="Forms">
    <h1>Become a Member!</h1>
    <Form newTeam ={newTeam}/>
    </div>
    </Div>
  );
}

export default App;
