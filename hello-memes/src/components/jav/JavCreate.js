import React, { useState } from "react";

export default function JavCreate(props){
    const {onCreate}=props;
    const [newName , setNewmName] =useState('');
    const [newDate, setNewDate] =useState('');
    const [newAmount, setNewAmount] =useState('');
    
    const handleCreate =(event)=>{
        event.preventDefault();

        setNewmName('');
        setNewDate('');
        setNewAmount('');

        onCreate(newName, newDate, newAmount);
    }

    const [anble, setAnble] =useState(false);

    const Open =()=>{
        setAnble(true)
    }
    const Cancel =()=>{
        setAnble(false)
    }

    return(
        <form onSubmit={handleCreate}>
            {anble ? <div>
                <input type="text" placeholder="name" onChange={(event)=>setNewmName(event.target.value)} />
                <input type="date" placeholder="date" onChange={(event)=>setNewDate(event.target.value)} />
                <input type="number" placeholder="amount" onChange={(event)=>setNewAmount(event.target.value)} />
                <button type="submit">thêm</button>
                <button onClick={Cancel}>đóng</button>
            </div>:<button onClick={Open}>mỏ</button>}
            
        </form>
    )
}