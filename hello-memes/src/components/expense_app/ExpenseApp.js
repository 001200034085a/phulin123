import React, { useState } from "react";
import CreateExpenForm from "./CreateExpenForm";
import ExpenseItem from "./ExpenseItem";
import ExpenseChart from "./EXpenseChart";
import expenseData from "../../data/ExpenseData";

export default function ExpenseApp(){
    const [data, setData]=useState(expenseData);
    const [filterYear, setFilterYear]=useState(2022)

    const addItem=(name,date,amount)=>{
     const newItem={
         id:Date.now(),
         name:name,
         date:date,
         amount:amount,

     }
     const newData=[...data,newItem];
     setData(newData)
    }

    const deleteItem=(itemId)=>{
       const remove=data.filter((item)=>item.id !=itemId)
         
       setData(remove);
    }
    
    const EditItem=(itemId,newName,newDate,newAmount)=>{
        const newData=[...data];
        for(let item of data){
            if(item.id==itemId){
                item.name=newName
                item.date=newDate
                item.amount=newAmount
            }
        }
        setData(newData)
    }

    const result=data.filter(item=>{
        let date=new Date(item.date);
        return filterYear==date.getFullYear();
    })

    return(
        <div className="expense-app">
             <CreateExpenForm onAddItem={addItem}/>
             <select onChange={(event)=>{setFilterYear(event.target.value)}}>
                 <option>2022</option>
                 <option>2021</option>
                 <option>2020</option>
                 <option>2019</option>
             </select>
             <div className="chart">
               <ExpenseChart data={data} filterYear={2022}  />
             </div>
             <div className="list">
                {result.map(item=>{
                    return(
                        <ExpenseItem key={item.id}
                        id={item.id}
                        name={item.name}
                        date={item.date}
                        amount={item.amount}
                        onDeleteItem={deleteItem}
                        onEditItem={EditItem}

                        />
                    )
                })}
             </div>
        </div>
    )
}