import React from 'react';


 const Team = (props) => {




    return (

        <div> 
           { props.members.map(random => (
               <div>
                    <h2> Name: {random.name} </h2>
                    <ul>
                        <li> Role: {random.role}</li>
                        <li> Email: {random.email}</li>
                    </ul>
        
               </div>

           )) }      
         </div>

    );


 } 

 export default Team