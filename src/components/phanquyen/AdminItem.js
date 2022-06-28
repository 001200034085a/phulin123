import React, { useState } from "react";

export default function AdminItem({id,name,image,dob,description,address,country,career,prize,evaluate,period,medal,position,onEditItem,onDeleteItem}){
    const [editing,setEditing]=useState(false);
    
    const [newImage, setNewImage]=useState('');
    const [newName, setNewName]=useState('');
    const [newDob, setNewDob]=useState('');
    const [newDescription, setNewDescription]=useState('');
    const [newAddress, setNewAddress]=useState('');
    const [newCountry, setNewCountry]=useState('');
    const [newPosition, setNewPosition]=useState('');
    const [newPeriod, setNewPeriod]=useState('');
    const [newCareer, setNewCareer]=useState('');
    const [newEvaluate, setNewEvaluate]=useState('');
    const [newPrize, setNewPrize]=useState('');
    const [newMedal, setNewMedal]=useState('');

    const anebleEdit =()=>{
        console.log("chuyển dữ liệu sang")
        setEditing(true);
    }
    const edit =()=>{
        setEditing(false);
        onEditItem(id,newImage,newName,newDob,newDescription,newAddress,newCountry,newPosition,newPeriod,newCareer,newEvaluate,newPrize,newMedal);
        setNewImage('');
        setNewName('');
        setNewDob('');
        setNewDescription('');
        setNewAddress('');
        setNewCountry('');
        setNewPosition('');
        setNewPeriod('');
        setNewCareer('');
        setNewEvaluate('');
        setNewPrize('');
        setNewMedal('');
    }

    return(
        <div className="admin-item">
           <div className="thong-tin1">
            
            <div className="thong-tin1a">
               {editing ? <input type="text" placeholder="ảnh" defaultValue={image} onChange={(event)=>setNewImage(event.target.value)}/>: <img src={image} />}
               <div className="thong-tin1b">
                  {editing ? <input type="text" placeholder="tên" defaultValue={name} onChange={(event)=>setNewName(event.target.value)} />:<b>Tên:{name}</b>}<br/> 
                  {editing ? <input type="date" placeholder="ngày sinh" defaultValue={dob} onChange={(event)=>setNewDob(event.target.value)} />:<a>ngày sinh:{dob}</a>} <br/>
                  {editing ? <input type="text" placeholder="xuất thân" defaultValue={description} onChange={(event)=>setNewDescription(event.target.value)}  />:<c>Xuất thân: {description}</c>} <br/>
                  {editing ? <input type="text" placeholder="quê quán" defaultValue={address} onChange={(event)=>setNewAddress(event.target.value)} />:<d>Quê quán: {address}</d>} <br/>
                  {editing ? <input type="text" placeholder="quốc gia" defaultValue={country} onChange={(event)=>setNewCountry(event.target.value)}  />:<e>Quốc gia: {country}</e>} <br/>
                  {editing ? <input type="text" placeholder="chức vụ" defaultValue={position} onChange={(event)=>setNewPosition(event.target.value)} />:<a>Chức vụ: {position}</a>} 
               </div> 
            </div>
               <div className="thong-tin1d">
                  {editing ? <input type="text" placeholder="thời kỳ" defaultValue={period} onChange={(event)=>setNewPeriod(event.target.value)} />:<p>Thời kỳ: {period}</p>} 
                  {editing ? <input type="text" placeholder="chiến tích" defaultValue={career} onChange={(event)=>setNewCareer(event.target.value)} />:<f>Chiến tích: {career}</f>} <br/><br/>
                  {editing ? <input type="text" placeholder="cống hiến" defaultValue={evaluate} onChange={(event)=>setNewEvaluate(event.target.value)}  />:<h>Cống Hiến: {evaluate}</h>} <br/><br/>
               </div>
             
             <div className="thong-tin1c">
               {editing ? <input type="text" placeholder="xinh danh" defaultValue={prize} onChange={(event)=>setNewPrize(event.target.value)} />:<g>Vinh danh: {prize}</g>} <br/><br/>  
               {editing ? <input type="text" placeholder="huân chương" defaultValue={medal} onChange={(event)=>setNewMedal(event.target.value)} />:<b>Huân Chương:{medal}</b>}<br/><br/>
               
             </div>
             {editing? <button onClick={edit}>lưu</button>:<button onClick={anebleEdit}>sửa</button>} 
             <button onClick={(event)=>onDeleteItem(id)} >xóa</button>
          </div>
        </div>
    )
}