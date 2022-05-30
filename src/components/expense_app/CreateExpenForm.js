import React, { useState } from "react";

export default function CreateExpenseForm({onCreateExpense}){
    const [editable, setEditable]=useState(false);
    const [newName, setNewName]=useState('');
    const [newAmount, setNewAmount]=useState('');
    const [newDate, setNewDate]=useState('');

    

    const handleCreateExpense=(event)=>{
        event.preventDefault();
        if(!newName||!newDate||!newAmount){
            alert("vui lòng nhập lại giữ liệu")
            return
        }
        onCreateExpense(newName,newDate,newAmount);  

        setNewName('');
        setNewDate('')
        setNewAmount('')
        setEditable(false)
    }
    return(
        <form onSubmit={handleCreateExpense} className="create-expense-form">
           {!editable && <div className="expense-create-form">
                 <button type="button" onClick={()=>setEditable(true)} >add new pense</button>
           </div> }
           {editable && <div >
                <div className="input-group" >
                    <label>name</label>
                    <input type="text" onChange={(event)=>setNewName(event.target.value)} />
                </div> 
                <div className="input-group" >
                    <label>date</label>
                    <input type="date" onChange={(event)=>setNewDate(event.target.value)} />
                </div> 
                <div className="input-group" >
                    <label>amount</label>
                    <input type="text" onChange={(event)=>setNewAmount(event.target.value)} />
                </div> 
                <div className="action">
                    <button type="submit">add</button>
                    <button type="button" onClick={()=>setEditable(false)}>cancel</button>
                </div>
            </div>}
        </form> 

    )
}