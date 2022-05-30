import React from "react";

export default function Btvn({trangchu,theloai,trangthai,xemnhieu,binhluannhieu,luonglongnhatthe,nam,hoidap,tv}){
    return(
       <div className="anime">
            <p>{trangchu}</p>
            <p>{theloai}</p>
            <p>{trangthai}</p>
            <p>{xemnhieu}</p>
            <p>{binhluannhieu}</p>
            <p>{luonglongnhatthe}</p>
            <p>{nam}</p>
            <p>{hoidap}</p>
            <p>{tv}</p>
       </div>
   ) 
}