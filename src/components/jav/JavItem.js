import React, { useState } from "react";

export default function JavItem({name,date,watched,id,onDeleteItem,onWatchedItem,onEditItem}){
    const [isEditing, setIsEditing]=useState(false);
    const [newName, setNewName]=useState('');
   const edit=()=>{
       onEditItem(id,newName);
       setIsEditing(false);
       setNewName('')
   }
   const enableEdit=()=>{
       console.log("chuyển dữ liệu sang"+id)
       setIsEditing(true);

   }
   const changeNewName=(event)=>{
       setNewName(event.target.value)
   }
return(
    <div className="jav-item" >
        {isEditing ? <input type="text" defaultValue={name} onChange={changeNewName}/>:<b>{name}</b> }
        <i>{date}</i>
        <code>{watched ? "wathced":" "}</code>

        <div className="item-action">
           {isEditing ? <button onClick={edit} >lưu</button>:<button onClick={enableEdit}>sửa</button>}
           <button onClick={ (event)=>{onDeleteItem(id)}}>xóa</button>
           <button onClick={ (event)=>{onWatchedItem(id)}}>xem</button>
        </div>
    </div>
)
}