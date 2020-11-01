import React ,{useState} from 'react'
import styled from "styled-components";

const Div = styled.div`
label {
  margin-bottom: -12px;
  text-align: left;
  width: 200px;

}

form {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

input, textarea {
  width: 200px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;  
  border: 1px solid #ff65a3;
  border-radius: 4px;
}
  
button {
  background: #ff7eb9;
  background-image: linear-gradient(-315deg, #ff7eb9 40%,#ff65a3 100%);
  border: 1px solid #ff65a3;
  padding: 10px 15px;
  font-size: 16px;
  color: #191919;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12), 0 2px 2px 1px rgba(0, 0, 0, 0.24);
  transition: all 0.2 ease-in;
}
button:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.12), 0 2px 3px 2px rgba(0, 0, 0, 0.24);
  background: #ff65a3;
}
button:active {
  background: #ff7eb9;
          box-shadow: inset 0px 0px 5px #ff65a3;
   outline: none;
}

`;



function Form (props) {
     const [team, setTeam] = useState({name: props.name , email : "" , role: ""})

     const changeHandler = (event) => {
          console.log(event.target.value);
          const NTObj = {...team, [event.target.name]: event.target.value}
          console.log(NTObj);
          setTeam(NTObj);
          console.log(team);
      }

     const submitHandler = event => {
        event.preventDefault();
        props.newTeam(team);
        setTeam({name: props.name , email : "" , role: ""})

      }



     return (
          <Div>
      <form onSubmit= {submitHandler}>
       <label htmlFor = "name">Name</label>
        <input 
         type = "text"
         required
         placeholder = "Enter Name" 
         name = "name" 
         id = "name" 
         value = {team.name} 
         onChange={changeHandler} />
       <label htmlFor = "email" >Email</label>
        <input 
        type = "email" 
        placeholder = "Email" 
        name = "email" 
        id = "email" 
        required
        value = {team.email}  
        onChange={changeHandler} />
       <label htmlFor = "role">Role</label>
        <input 
        type = "text" 
        placeholder = "Enter Role" 
        name = "role" 
        id = "role" 
        required
        value = {team.role}  
        onChange={changeHandler} />
      <button type = "submit">Add Member</button>
      </form> 
          </Div>
     )
}

export default Form
