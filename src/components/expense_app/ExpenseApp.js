import React, { useState } from "react";
import expenseData from "../../data/ExpenseData";
import CreateExpenForm from "./CreateExpenForm";
import ExpenseItem from "./ExpenseItem";
import ExpenChart from "./EXpenseChart"

export default function ExpenseApp (){
    const [data, setData]=useState(expenseData);
    const [filterYear, setFilterYear]=useState(2022);

    const deleteItem=(itemId)=>{
        console.log("xóa một item "+itemId);
        const remove=[...data].filter(item=>{
            return item.id !=itemId
        })
        setData(remove)
    }
    const editItem=(itemId,newName,newAmount)=>{
        console.log("sửa một item"+itemId,newName,newAmount)
        const newData=[...data];
        for(let item of data){
            if(item.id==itemId){
                item.name=newName
                item.amount=newAmount
            }
        }
        setData(newData)
   
    }
    const CreateExpense=(name,date,amount)=>{
        console.log("tạo một item"+name+date+amount)
        const newItem={
            id:Date.now(),
            name:name,
            date:date,
            amount:amount,
        }
        const newData=[...data,newItem];
        setData(newData);

        const dateObject=new Date(date);
        setFilterYear(dateObject.getFullYear());
    }
    const result=data.filter(item=>{
        let date=new Date(item.date);
        return filterYear==date.getFullYear();
    })
    return(
        <div>
            <CreateExpenForm onCreateExpense={CreateExpense} />
            <div>
                <h2>filter by year</h2>
                <select value={filterYear} onChange={(event)=>setFilterYear(event.target.value)} >
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                </select>
            </div>
            <ExpenChart data={data} />
            <div>
               {result.map(item=>{
                   return(
                       <ExpenseItem key={item.id}
                       id={item.id}
                       name={item.name}
                       date={item.date}
                       amount={item.amount} 
                       onDeleteItem={deleteItem}
                       onEditItem={editItem}/>
                   )
               })}
            </div>
        </div>
    )
}