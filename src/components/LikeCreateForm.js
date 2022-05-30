import React, { useState } from "react";

export default function JAVCreateForm({onAddItem}){
    const [content, setContent]=useState();
    const[name, setName]=useState();
    const handleCreateItem=(event)=>{
        event.preventDefault();
        if(!content||!name){
            alert("vui lòng nhập tên")
            return
        }
        onAddItem(content,name)
        
    }
    return (
        <form onSubmit={handleCreateItem}>
            <input type="text" placeholder="tên" onChange={(event)=>{setName(event.target.value)}} />
            <input type="text" placeholder="nội dung" onChange={(event)=>{setContent(event.target.value)}} />
            <button> post</button>
        </form>
    )
}   