import React, { useState } from "react";
import HistoryData from "../../data/HistoryData";
import AdminItem from "./AdminItem";

export default function AdminCreateForm({onCreateForm}){
    const [editable, setEditable]=useState(false);
    
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


    const handleCreateForm=(event)=>{
        event.preventDefault();
        if(!newName||!newDob||!newDescription||!newAddress||!newCountry||!newPosition||!newPeriod||!newCareer||!newEvaluate||!newPrize||!newMedal){
            alert("vui lòng nhập đủ dữ liệu");
            return;
        }
        onCreateForm(newImage,newName,newDob,newDescription,newAddress,newCountry,newPosition,newPeriod,newCareer,newEvaluate,newPrize,newMedal);

        setNewImage('');
        setNewName('');
        setNewDob("");
        setNewDescription('');
        setNewAddress('');
        setNewCountry('');
        setNewPosition('');
        setNewPeriod('');
        setNewCareer('');
        setNewEvaluate('');
        setNewPrize('');
        setNewMedal('');
        setEditable(false);
    }

    return(
        <form  onSubmit={handleCreateForm} className="admin-create-form">
            {!editable && <div>
                <button type="button" onClick={()=>setEditable(true)} >Thêm Nhân Vật</button>
            </div>}
            {editable &&
            <div>
                <div>
                   <label>ảnh</label>
                   <input type="text" onChange={(event)=>setNewImage(event.target.value)} />
                </div>
                <div>
                   <label>Tên</label>
                   <input type="text" onChange={(event)=>setNewName(event.target.value)} />
                </div>
                <div>
                   <label>Ngày sinh</label>
                   <input type="date" onChange={(event)=>setNewDob(event.target.value)}/>
                </div>
                <div>
                   <label>Xuất Thân</label>
                   <input type="text" onChange={(event)=>setNewDescription(event.target.value)}/>
                </div>
                <div>
                    <label>Quê Quán</label>
                    <input type="text" onChange={(event)=>setNewAddress(event.target.value)}/>
                </div>
                <div>
                   <label>Quốc Gia</label>
                   <input type="text" onChange={(event)=>setNewCountry(event.target.value)}/>
                </div>
                <div>
                   <label>Chức vụ</label>
                   <input type="text" onChange={(event)=>setNewPosition(event.target.value)}/>
                </div>
                <div>
                    <label>Thời kỳ</label>
                    <input type="text" onChange={(event)=>setNewPeriod(event.target.value)}/>
                </div>
                <div>
                    <label>Chiến Tích</label>
                    <input type="text" onChange={(event)=>setNewCareer(event.target.value)}/>
                </div>
                <div>
                    <label>Cống Hiến</label>
                    <input type="text" onChange={(event)=>setNewEvaluate(event.target.value)}/>
                </div>
                <div>
                    <label>Vinh Danh</label>
                    <input type="text" onChange={(event)=>setNewPrize(event.target.value)}/>
                </div>
                <div>
                   <label>Huân Chương</label>
                   <input type="text" onChange={(event)=>setNewMedal(event.target.value)}/>
                </div>
                <div>
                    <button type="submit">Thêm</button>
                    <button type="button" onClick={()=>setEditable(false)}>đóng</button>
                </div>
            </div>}
            
            
        </form>
    )
}