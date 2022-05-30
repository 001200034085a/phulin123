import React, { useState } from "react";
import LikeItem from "./LikeItem";
import LikeCreateForm from "./LikeCreateForm"

export default function LikeTutorial(){
    const [data, setData]=useState([
        {id:1,name:"like001",content:"hello",date:"2022/05/06",like:1},
        {id:2,name:"like002",content:"bye",date:"2022/05/07",like:5},
        {id:3,name:"like003",content:"good",date:"2022/05/08",like:7},
    ]);
     const addItem =(name,content)=>{
         console.log("tạo một item"+name+content)
         const newItem={
             id:Date.now(),
             name:name,
             content:content,
             date:new Date().toISOString(),
             like:data.like,
         }
         const newData=[newItem,...data]
         setData(newData)
     }
     const deleteItem =(itemId)=>{
        console.log("xóa một item"+itemId)
        const remove=[...data].filter(jav=>{
            return jav.id !=itemId
        })
        setData(remove)
     }
     const editItem =(itemId,newContent)=>{
         console.log("sửa một item "+itemId)
         const newData=[...data];
         for(let item of data){
             if(item.id==itemId){
                 item.content=newContent
             }
         }
         setData(newData)
     }
     
     const likeItem=(itemId)=>{
         console.log("thích item")
         
         const newData=[...data];
         for(let item of data){
             if(item.id==itemId){
                item.like=item.like+1
             }
         }
         setData(newData)
        
     }
    return(
        <div>
            <LikeCreateForm onAddItem={addItem} />
            <div>
                {data.map(jav=>{
                    return(
                        <LikeItem id={jav.id}
                        name={jav.name}
                        content={jav.content}
                        date={jav.date}
                        like={jav.like}
                        onDeleteItem={deleteItem}
                        onEditItem={editItem}
                        onLikeItem={likeItem}
                        />
                    )
                })}
            </div>
        </div>
    )
}