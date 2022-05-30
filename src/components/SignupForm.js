import React, { useState } from "react";

export default function SignupForm(){
    const [firstname, setFirstName]=useState();
    const [lastname, setLastName]=useState();
    const [age, setAge]=useState();
    const [address, setAddress]=useState();
    const [gender, setGender]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [confirm, setConfirm]=useState();

    const changeFirstName =(event)=>{
        setFirstName (event.target.value)
    }
    const changeLastName =(event)=>{
        setLastName (event.target.value)
    }
    const changeAge =(event)=>{
        setAge (event.target.value)
    }
    const changeAddress =(event)=>{
        setAddress (event.target.value)
    }
    const changeGender =(event)=>{
        setGender (event.target.value)
    }
    const changeEmail =(event)=>{
        setEmail (event.target.value)
    }
    const changePassword =(event)=>{
        setPassword (event.target.value)
    }
    const changeConfirm =(event)=>{
        setConfirm (event.target.value)
    }
    const handleSignup=(event)=>{
        event.preventDefault();
        if(!email||!password||!confirm||!age||!firstname||!lastname){
            alert("nhập lại giữ liệu")
        }
        else if(age<0){
            alert("nhập lại tuoiot lớn hơn 0")
        }
        else if(password !=confirm){
            alert("nhập lại password")
        }
        else if(password.length <6){
            alert("mật khẩu dài hơn 6 ký tự")
        }
        else{
            alert("đăng ký thành công"+"fullname: "+firstname+lastname+" "+"age: "+age+" "+"address: "+address+" "+"gender:"+gender+" "+"email: "+email+" "+"password: "+password+" "+"confirm: "+confirm )
        }
    }



    return (
        <form onSubmit={handleSignup} >
            
            <h1>signup</h1>
            <div>firstname:<input type="text" placeholder="firstname" onChange={changeFirstName}  /></div>
            <div>lastname:<input type="text" placeholder="lastname" onChange={changeLastName}  /></div>
            <div>age:<input type="number" placeholder="age" onChange={changeAge}  /></div>
            <div>address:<input type="text" placeholder="address" onChange={changeAddress}  /></div>
            <div>gender:<input type="text" placeholder="gender" onChange={changeGender}  /></div>
            <div>email:<input type="email" placeholder="email" onChange={changeEmail}  /></div>
            <div>password:<input type="password" placeholder="password" onChange={changePassword}  /></div>
            <div>confirm:<input type="password" placeholder="confirm" onChange={changeConfirm}  /></div>
            <button>Signup</button>
        </form>
    )
}