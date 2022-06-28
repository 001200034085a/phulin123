import React,{useState} from "react";

export default function JavCreate({onCreate}){
    const [newName, setNewName]=useState('');
    const [newDate, setNewDate]=useState('');
    const [newAmount, setNewAmount]=useState('');

    const handleCreate=(event)=>{
        event.preventDefault();

        if(!newName||!newDate||!newAmount){
            alert("vui lòng nhập giữ liệu")
            return;
        }

        setNewName('');
        setNewAmount('');
        setNewDate('');

        onCreate(newName,newDate,newAmount);
    }

    return(
        <form onSubmit={handleCreate} >
            <div>
                <lable>name</lable>
                <input type="text"  onChange={(event)=>{setNewName(event.target.value)}} />
            </div>
            <div>
                <lable>date</lable>
                <input type="date" onChange={(event)=>{setNewDate(event.target.value)}} />
            </div>
            <div>
                <lable>amount</lable>
                <input type="amount" onChange={(event)=>{setNewAmount(event.target.value)}} />
            </div>
            <button type="submit">thêm</button>
        </form>
    )
}