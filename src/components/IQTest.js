import React, { useState } from "react";

export default function IQTest(){
     const [iq, setIQ]=useState();
     const [person, setPerson]=useState({name:"phu",address:"hanoi",job:"dev"});

     const showIQ =()=>{
           setIQ(Math.floor(Math.random()*(200-50+1)+50))
     }
     const changeJob=()=>{
            setPerson({...person, job:"tester"})
         
           
     } 
    return(
      <div>
           <h3>IQ của bạn là:<i>{iq}</i></h3>
            <button onClick={showIQ}>click</button>

            <h3>person</h3>
            <div>name:{person.name}</div>
            <div>address:{person.address}</div>
            <h3>job:{person.job}</h3>
            <button onClick={changeJob}>đổi</button>
      </div>
    
    
    )
}