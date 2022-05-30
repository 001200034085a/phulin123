import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import HistoryData from '../../data/HistoryData';
import Thoiky1 from './Thoiky1';


const ThongTin = () => {
   const [data, setData]=useState(HistoryData);
   const [filterYear, setFilterYear]=useState(140);

   const result=data.filter(item=>{
    let date=new Date(item.date);
    return filterYear==date.getFullYear();
    });

    return (
        <div className='thoi-ky' >
            <div>
                <select value={filterYear} onChange={(event)=>setFilterYear(event.target.value)} >
                    <option> 700TCN</option>
                    <option>140</option>
                    <option>503</option>
                    <option>866</option>
                    <option>924</option>
                    <option>941</option>
                    <option>974</option>
                    <option>1019</option>
                    <option>1258</option>
                    <option>1231</option>
                    <option>1385</option>
                    <option>1380</option>
                    <option>1753</option>
                    <option>1890</option>
                   
                </select>
            </div>
            
            <div className='thoi-ky-list'>

                {result.map(item=>{
                  return(
                    <Thoiky1 key={item.id}
                    image={item.image}
                    name={item.name}
                    date={item.date}
                    period={item.period}
                     />
                  )
               })}
            </div>
            
        </div>
    );
};

export default ThongTin; 