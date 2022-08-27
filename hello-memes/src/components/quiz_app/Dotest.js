import React, { useContext } from "react";
import TestContext from "./TestContext";

export default function Dotest(){
    const {currentTest}=useContext(TestContext)
    return(
        <div>
            {currentTest ?<h1>làm bài test:{currentTest.name}</h1>:<h1>hãy chọn 1 bài test</h1>}
            {currentTest ? <h5>thể loại:{currentTest.categories}</h5>:<h5> </h5>}
            
            
        </div>
    )
}