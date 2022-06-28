import React, { useState } from "react";
import CreateMain from "./CreateMain";
import MainItem from "./MainItem";
import "./test.css"

export default function MainApp(){
    const [data, setData]=useState([
        {id:1,name:"hello",amount:"bye"},
        {id:2,name:"a",amount:"b"},
        {id:3,name:"c",amount:"d"},
        {id:4,name:"e",amount:"f"},
    ]);

    const CreateItem=(name,amount)=>{
         const newItem={
            id:Date.now(),
            name:name,
            amount:amount
        }
        for(let item of data){
            if(item.name==name || item.amount==amount){
                alert("trùng dữ liệu cũ")
                return;
            }  
             if(item.name==amount){
                alert("trùng dữ liệu cũ")
                return ;
            }
            else if(item.amount==name){
                alert("trùng dữ liệu cũ")
                return;
            }
        }

         
        const newData=[...data,newItem];
        setData(newData)
   };
   
    return(
        <div className="main-app">
           <CreateMain onAddItem={CreateItem} />
            <div className="list">
               {data.map(item=>{
                   return(
                       <MainItem
                       key={item.id}
                       id={item.id}
                       name={item.name}
                       amount={item.amount}
                       
                        />
                   )
               })}
            </div>
        </div>
    )
}