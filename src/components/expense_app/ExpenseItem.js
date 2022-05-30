import React, { useState } from "react";

export default function ExpenseItem({id,name,date,amount,onEditItem,onDeleteItem}){
     const [editing, setEditing]=useState(false)
     const [newName, setNewName]=useState('')
     const [newAmount ,setNewAmount]=useState('')
     
     const edit=()=>{
       onEditItem(id,newName,newAmount)
       setEditing(false)
       setNewName('')
       setNewAmount('')
     }
     const anebleEdit=()=>{
       console.log("chuyển dữ liệu sang")
       setEditing(true)
     }
     const changeNewName=(event)=>{
       setNewName(event.target.value)
     }
     const changNewAmount=(event)=>{
       setNewAmount(event.target.value)
     }

     
    return(
        <div className="expense-item">
          <div>{date}</div>
          {editing ? <input type="text" defaultValue={name} onChange={changeNewName} />:<div>{name}</div>}
          {editing ? <input type="number" defaultValue={amount} onChange={changNewAmount}  />:<div>$ {amount}</div>}
          {editing ? <button onClick={edit}>lưu</button>:<button onClick={anebleEdit}>sửa</button>}
          <button onClick={(event)=>onDeleteItem(id)}>xóa</button>
        </div>
    )
}