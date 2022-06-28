import React, { useState } from "react";

export default function CreateMain({onAddItem}){
    const [newName, setNewName]=useState("");
    const [newAmount, setNewAmount]=useState('');

    const handleCreate=(event)=>{
        event.preventDefault();

        // if(!newName||!newAmount){
        //     alert("vui lòng nhập giữ liệu");
        //     return
        // }
        if(newName===newAmount){
            alert("trùng rồi")
            return;
            
        }
        
            
        
        onAddItem(newName,newAmount);
        
        setNewName('');
        setNewAmount('');
        
    }

    return(
        <form onSubmit={handleCreate} className="create-main">
            <div>
                <lable>name1</lable>
                <input type="text" onChange={(event)=>setNewName(event.target.value)} />
            </div>
            <div>
                <lable>name2</lable>
                <input type="text" onChange={(event)=>setNewAmount(event.target.value)}/>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}