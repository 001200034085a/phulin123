import React from "react";
import ExpenProgressBar from "./ExpenProgressBar";

export default function ExpenseChart({data}){
    let result={};
    for(let item of data){
        let dateObject=new Date(item.date);
        let month=dateObject.getMonth()+1;

        if(result[month]){
           result[month] +=item.amount;
        }
        else{
           result[month]=item.amount;
        }
    }
     console.log(result)
       
    return (
        <div>
            <h1>đây là bản đồ</h1>
            <ExpenProgressBar lable="hello" amount={10} maxAmount={100} />
        </div>
    )
}