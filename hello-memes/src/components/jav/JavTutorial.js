import React, { useState } from "react";
import JavCreate from "./JavCreate";
import JavItem from "./JavItem";

export default function JavTutorial(){
    const [data, setData]=useState([
        {id:1,name:"jav001",date:"2022/06/05",amount:20220,watched:true},
        {id:2,name:"jav002",date:"2022/06/06",amount:22020,watched:false},
        {id:3,name:"jav003",date:"2022/06/07",amount:20120,watched:false},
        {id:4,name:"jav004",date:"2022/06/08",amount:20320,watched:false},
        {id:5,name:"jav005",date:"2022/06/09",amount:25020,watched:false},

    ]);

    const onCreate =(name,date,amount, watched)=>{
        const newItem ={
            id:Date.now(),
            name:name,
            date:date, 
            amount:amount,
            watched:false
        }
        const newData= [...data, newItem];
        setData(newData)
    };

   const onWatched =(itemId)=>{
     const newItem = [...data];
     for(let item of data){
        if(item.id === itemId){
            item.watched = true;
        }
     }
     setData(newItem);
   };

   const onDelete =(itemId)=>{
    const newItem = [...data].filter(item=>{
        return item.id !==itemId
    });
    setData(newItem);
   };

   const onEdit=(itemId, newName, newDate, newAmount, newWatched)=>{
    const save=[...data];
    for(let item of data){
        if(item.id==itemId){
            item.name=newName
            item.date=newDate
            item.amount=newAmount
            item.watched=newWatched
        }
    }
    setData(save)
}

    return(
        <div>
           <JavCreate onCreate={onCreate} /> 
          {data.map(jav=>{
            return(
                <JavItem
                key={jav.id}
                id={jav.id}
                name={jav.name}
                amount={jav.amount}
                date={jav.date}
                watched={jav.watched}
                onWatched={onWatched}
                onDelete={onDelete}
                onEdit={onEdit}
                 />
            )
          })}
        </div>
    )
}