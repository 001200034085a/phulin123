import React, { useContext } from "react";

import TestContext from "./TestContext";

export default function TestList(){
    const store=useContext(TestContext);

    const data=store.data;
    const Dotest=store.Dotest;
    
    
   
    return(
        <div>
            {data.map(test=>{   
                return(
                    <div onClick={()=>Dotest(test)} style={{border:"1px solid black",height:"50px",marginBottom:"20px"}}>    
                        <a>tên câu hỏi:{test.name}</a>
                        <b>số câu hỏi:{test.questions.length}</b>
                        <c>thể loại:{test.categories}</c>
                    </div> 
                )             
                   
            })}
        </div>
    )
}