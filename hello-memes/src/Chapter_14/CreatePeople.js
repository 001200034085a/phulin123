import React, { useState } from "react";


export default function CreatePeople(props){
   const { onCreate } =props;

    const [newFirst_Name, setNewFirst_Name] = useState('');
    const [newLast_Name, setNewLast_Name]  =useState('');
    const [newEmail, setNewEmail]  = useState('');
    const [newGender, setNewGender] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newAddress, setNewAddress] =useState('');
    const [show, setShow] = useState(false);

    const handleCreate = (event)=>{
        event.preventDefault();
        if(!newFirst_Name||!newLast_Name||!newEmail||!newGender||!newAvatar||!newAddress){
            alert("vui lòng nhập đủ dữ liệu");
            return;
        }

        setNewLast_Name('');
        setNewFirst_Name('');
        setNewAvatar('');
        setNewAddress('');
        setNewEmail('');
        setNewGender('');

        onCreate(newFirst_Name, newLast_Name, newEmail, newGender, newAvatar, newAddress);

        setShow(false);

    };

 
   return(
    <div>
        {show ? <form onSubmit={handleCreate}>
            <input type="text" placeholder="first_name" onChange={(event)=>setNewFirst_Name(event.target.value)} /><br/>
            <input type="text" placeholder="last_name" onChange={(event)=>setNewLast_Name(event.target.value)} /><br/>
            <input type="text" placeholder="email" onChange={(event)=>setNewEmail(event.target.value)} /><br/>
            <input type="text" placeholder="gender" onChange={(event)=>setNewGender(event.target.value)} /><br/>
            <input type="text" placeholder="avatar" onChange={(event)=>setNewAvatar(event.target.value)} /><br/>
            <input type="text" placeholder="address" onChange={(event)=>setNewAddress(event.target.value)} /><br/>
            <button type="submit">add</button>
        </form>:<button onClick={()=>setShow(true)}>thêm</button>}
        
    </div>
    
   )
}