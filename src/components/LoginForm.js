
import React, {useState} from "react";

export default function LoginForm(){
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();

    const changeEmail =(event) =>{
        setEmail(event.target.value)
    }
    const changePassword=(event)=>{
        setPassword(event.target.value)
    }
    const handleLogin=(event)=>{
        event.preventDefault();
        if(!email||!password){
            alert("vui lòng nhập mật khẩu")
        }
        else{
            alert("đăng nhập thành công")
        }
    }
    return(
        <form onSubmit={handleLogin}>
            <div>Email:<input type="text" placeholder="your emali" onChange={changeEmail} /></div>
            <div>Password:<input type="password" placeholder="password" onChange={changePassword} /></div>
            <button>login</button>
        </form>
    )
}