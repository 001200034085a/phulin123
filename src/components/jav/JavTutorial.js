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

    const onCreate=(name,date,amount,watched)=>{
        const newItem={
            id:Date.now(),
            name:name,
            amount:amount,
            date:date,
            watched:false
        }
        const newData=[...data,newItem];
        setData(newData);
    };

    const deleteItem=(itemId)=>{
        const remove=[...data].filter(item=>{
            return item.id !=itemId
        });
        setData(remove);
    };

    const watched=(itemId)=>{
        const See=[...data];
        for(let item of data){
            if(item.id ==itemId){
                item.watched=true
            }
        }
        setData(See)
    };

    const Edit=(itemId,newName,newDate,newAmount,newWatched)=>{
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
        <div className="jav-tutorial">
              <JavCreate onCreate={onCreate} />
              <div className="jav-list">
                   {data.map(jav=>{
                       return(
                           <JavItem key={jav.id}
                           id={jav.id}
                           name={jav.name}
                           date={jav.date}
                           amount={jav.amount}
                           watched={jav.watched}
                           onDelete={deleteItem}
                           onWatched={watched}
                           onEdit={Edit}
                            />
                       )
                   })}
              </div>
        </div>
    )
}