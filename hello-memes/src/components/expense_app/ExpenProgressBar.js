import React from "react";
import "../../css/ExpenProgressBar.css";

export default function ExpenProgressBar({label,amount,maxAmount}){
    const percentage =amount*100/maxAmount;
    return(
        <div className="expense-progress-bar">
            <lable>{label}</lable>
            <div className="expense-curent-progress">

            </div>
        </div>
    )
}