import React, { useState } from "react";
import CountDown from "./CountDown";
import TestContext from "./TestContext";
import TestList from "./TestList";
import TestData from "../../data/TestData";
import MainContent from "./MainContent";

export default function QuizApp(){
    const [data, setData]=useState(TestData);
    
    const [currentTest, setCurrentTest]=useState(null);

    const Dotest =(test)=>{
         setCurrentTest(test)
    }

    const store={data:data,currentTest:currentTest,Dotest:Dotest}
    return(
        <TestContext.Provider value={store}>
            <div>
                <h1> Quiz App</h1>
                <CountDown maxSeconds={100} onStop={()=>alert("dừng")} />
                <MainContent />
            </div>
        </TestContext.Provider>
        
    )
}