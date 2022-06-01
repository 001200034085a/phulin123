import React, { useState } from 'react';
import HistoryData from '../../data/HistoryData';
import ThongTin1 from './ThongTin1';



const ThongTin = () => {
    
    const [data, setData]=useState(HistoryData);
    const [keyword, setKeyword]=useState('');

    const result=data.filter(item=>item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);

    return (
        <div className='thong-tin' >
            <h2> Thông Tin Các Anh Hùng</h2>
            <input type="text" placeholder="tìm kiếm" onChange={(event)=>setKeyword(event.target.value)} />
            {result.map(item=>{
                return(
                    <ThongTin1 key={item.id}
                    id={item.id} 
                    image={item.image}
                    name={item.name}
                    dob={item.dob}
                    description={item.description}
                    address={item.address}
                    country={item.country}
                    period={item.period}
                    career={item.career}
                    prize={item.prize}
                    evaluate={item.evaluate}
                    medal={item.medal}
                    
                        />
                )
            })}
        </div>
    );
};

export default ThongTin; 