import React, { useState } from "react";
import JAVCreateForm from "./JAVCreateForm";
import JavItem from "./JavItem";

export default function JavTutorial(){
    const [data, setData]=useState([
        {id:1,name:"jav001",date:"2022/05/06",watched:true},
        {id:2,name:"jav002",date:"2022/05/07",watched:false},
        {id:3,name:"jav003",date:"2022/05/08",watched:false},
        {id:4,name:"jav004",date:"2022/05/09",watched:false},
    ]);
    const addItem=(name)=>{
        console.log("tạo một item có name là :"+name)
        const newItem={
            id:Date.now(),
            name:name,
            date:new Date().toISOString(),
            watched:false,
        }
        const newData=[...data,newItem]
        setData(newData)
    }
   const deleteItem=(itemId)=>{
       console.log("xóa item tại vị trí"+itemId)
       const remove=[...data].filter(jav=>{
            return jav.id !=itemId    
       })
        setData(remove)
   }
   const watchedItem=(itemId)=>{
       console.log("xem item tại vị trí"+itemId)
       const See=[...data].map(jav=>{
          if(jav.id==itemId){
              jav.watched=itemId
          }
          return jav
       })
       setData(See)
   }
   const editItem=(itemId,newName)=>{
      const newData=[...data];
      for(let item of data){
          if(item.id==itemId){
              item.name=newName
          }
      }
      setData(newData)
   }
    return(
        <div>
            <JAVCreateForm onAddItem={addItem} />
            <div>
              {data.map(jav=>{
                  return(
                      <JavItem 
                      id={jav.id}
                      name={jav.name}
                      date={jav.date}
                      watched={jav.watched}
                      onDeleteItem={deleteItem}
                      onEditItem={editItem}
                      onWatchedItem={watchedItem}
                      />
                  )
              })}
            </div>
        </div>
    )
}