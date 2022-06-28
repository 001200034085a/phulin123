import React, { useState } from "react";
import HistoryData from "../../data/HistoryData";
import AdminCreateForm from "./AdminCreateForm";
import AdminItem from "./AdminItem";

export default function HistoryAdmin(){
    const [data, setData]=useState(HistoryData);
    const [keyword, setKeyword]=useState('');
    const result=data.filter(item=>item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);

    const deleteItem=(itemId)=>{
       console.log("xóa một item"+itemId);
       const remove=[...data].filter(item=>{
           return item.id !=itemId
       })
       setData(remove)
    };
    const editItem=(itemId,newImage,newName,newDob,newDescription,newAddress,newCountry,newPosition,newPeriod,newCareer,newEvaluate,newPrize,newMedal)=>{
        const newData=[...data];
        for(let item of data){
            if(item.id==itemId){
                item.image=newImage
                item.name=newName
                item.dob=newDob
                item.description=newDescription
                item.address=newAddress
                item.country=newCountry
                item.position=newPosition
                item.period=newPeriod
                item.career=newCareer
                item.evaluate=newEvaluate
                item.prize=newPrize
                item.medal=newMedal
            }
        }
        setData(newData);
    }

    const CreateForm=(image,name,dob,description,address,country,position,period,career,evaluate,prize,medal)=>{
        const NewItem={
            image:image,
            name:name,
            dob:dob,
            description:description,
            address:address,
            country:country,
            position:position,
            period:period,
            career:career,
            evaluate:evaluate,
            prize:prize,
            medal:medal
        }
        const newData=[NewItem,...data];
        setData(newData);
    }

    return(
        <div className="History-admin">
           <AdminCreateForm onCreateForm={CreateForm} />
           <input type="text" placeholder="tìm kiếm" onChange={(event)=>setKeyword(event.target.value)} />
           <div className="admin-list">
                 {result.map(item=>{
                     return(
                         <AdminItem key={item.id}
                         id={item.id}
                         image={item.image}
                         name={item.name}
                         dob={item.dob}
                         description={item.description}
                         address={item.address}
                         country={item.country}
                         position={item.position}
                         period={item.period}
                         career={item.career}
                         evaluate={item.evaluate}
                         prize={item.prize}
                         medal={item.medal}
                         onDeleteItem={deleteItem}
                         onEditItem={editItem}
                          />
                     )
                 })}
           </div>
        </div>
    )
}