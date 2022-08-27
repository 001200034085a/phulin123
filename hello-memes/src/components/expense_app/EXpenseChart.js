import React from "react";
import ExpenProgressBar from "./ExpenProgressBar";

export default function ExpenseChart({data}){
    let result={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0};
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