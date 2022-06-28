import React from "react";

export default function MainItem({name,amount}){
    return(
        <div className="main-item">
            <hr/>
                <div>{name}</div> &nbsp; :&nbsp; <div>{amount}</div>
            
        </div>

    )
}