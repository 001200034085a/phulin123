import React,{useState} from "react";

export default function CreateExpenForm({onAddItem}){
    const [newName, setNewName]=useState('');
    const [newDate, setNewDate]=useState('');
    const [newAmount, setNewAmount]=useState('');

    const handleCreatForm=(event)=>{
        event.preventDefault();

        if(!newName,!newDate,!newAmount){
            alert("vui lòng nhập dữ liệu")
            return;
        }
        onAddItem(newName,newDate,newAmount)
    }


    return(
        <form onSubmit={handleCreatForm} className="create-expen-form">
          <div> 
           <lable>name</lable>
           <input type="text" onChange={(event)=>setNewName(event.target.value)}/>

           <lable>date</lable>
           <input type="date" onChange={(event)=>setNewDate(event.target.value)} />

           <lable>amount</lable>
           <input type="number" onChange={(event)=>setNewAmount(event.target.value)} />
          </div>  
          <button type="submit">add</button>
          <button type="button" >cancel</button>
        </form>
    )
}