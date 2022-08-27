import React, { useState } from "react";
import CreateFooterForm from "./CreateFooterForm";
import FooterItem from "./FooterItem";


export default function FooterApp(){
    const [data, setData]=useState([
        {id:1,name:"mata",idea:"khá hay",opinion:"cần thêm một số chức năng"},
        {id:2,name:"wofd",idea:"tệ",opinion:"không hay cho lắm"},
        {id:3,name:"jonh cena",idea:"ok",opinion:"xin vĩnh biệt cụ"},
    ]);
  
    const CreateFooter=(name,idea,opinion)=>{
        console.log("tạo một item"+name+idea+opinion);
        const newItem={
            id:Date.now(),
            name:name,
            idea:idea,
            opinion:opinion
        }
        const newData=[...data,newItem];
        setData(newData);
    }

    return(
        <div className="footer-app">
            <CreateFooterForm onCreateFooter={CreateFooter} />
            <div className="footerlist">
            {data.map(item=>{
                   return(
                     <FooterItem key={item.id}
                      id={item.id}
                       name={item.name}
                        idea={item.idea} 
                        opinion={item.opinion} />
                   )
               })}
            </div>
            
        </div>
    )
}