import React, { useState } from "react";

export default function ExpenseItem({date,name,amount,id,onDeleteItem,onEditItem}){
  const [isEditing, setIsEditing]=useState(false);
  const [newName ,setNewName]=useState('');
  const [newDate, setNewDate]=useState('');
  const [newAmount, setNewAmount]=useState('');

  const Edit=()=>{
   setIsEditing(false);
   onEditItem(id,newName,newDate,newAmount);

   setNewName('');
   setNewAmount('');
   setNewDate('');
  }
  const anEditable=()=>{
    setIsEditing(true);
  }
  

  return(
    <div className="expense-item">
      
      {isEditing ?<input type="text" onChange={(event)=>setNewName(event.target.value)} />:<b>{name}</b>} 
      {isEditing ?<input type="date" onChange={(event)=>setNewDate(event.target.value)}/>:<div>{date}</div>}
      {isEditing ?<input type="number" onChange={(event)=>setNewAmount(event.target.value)}/>:<c>{amount}$</c>}
      {isEditing ?<button onClick={Edit}>lưu</button>:<button onClick={anEditable}>sửa</button>} 
       <button onClick={(event)=>{onDeleteItem(id)}}>xóa</button>
    </div>
  )
}