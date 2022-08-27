import React, { useEffect, useState } from "react";

export default function CountDown({maxSeconds,onStop}) {
    const [current, setCurrent]=useState(maxSeconds);
    
    useEffect(()=>{
       const interval=setInterval(()=>{
             console.log("đếm");
             if(secs<=0){
                 clearInterval(interval);
                 if(onStop) onStop();
                 return;
             }
             setCurrent(current-1); 
       },1000)
       return ()=>{
           clearInterval(interval)
           
       };
    },[current]);

    const mins=Math.floor(current/60);
    const secs=current % 60;
    return(
        <div>
            thời gian còn lại:{mins<10 ? "0"+mins:mins}:{secs<10? "0"+secs:secs}
        </div>
    )
}