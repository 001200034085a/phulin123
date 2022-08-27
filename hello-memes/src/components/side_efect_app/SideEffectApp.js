import React, { useEffect, useState } from "react";

export default function SideEffectApp(){
    const [newTitle, setNewTitle]=useState('tiêu đề');
    const [aNumber, setANumber]=useState(0);
    const [bNumber, setBNumber]=useState(0);
    // gọi api ở đây 
    useEffect(()=>{
        console.log("chạy một lần thôi")
    },[]);
    // không lên gọi api ở đây
    useEffect(()=>{
        console.log("luôn chạy sau khi state thay đổi và component render lại")
    });
    // gọi api ở đây
    useEffect(()=>{
        document.title=newTitle;
        console.log(newTitle,"thực hiện tác vụ siêu nặng mất 30s")
       
    },[newTitle]);  
    useEffect(()=>{
        console.log("a"+aNumber)
        console.log("b"+bNumber)
        console.log("thay đổi 1 số a hoặc b mất 1p")
    },[aNumber,bNumber]);
   
   
    return(
        <div className="side-efect-app">
           <input type="text" placeholder="nhập dữ liệu" onChange={(event)=>setNewTitle(event.target.value)} /> <br/>
           <input type="number" placeholder="nhập vào a" onChange={(event)=>setANumber(Number(event.target.value))} />
           +
           <input type="number" placeholder="nhập vào b" onChange={(event)=>setBNumber(Number(event.target.value))}/>
           {/* <button>sửa</button>  */}
           tính tổng a và b là : {aNumber + bNumber}
        </div>
    )
}