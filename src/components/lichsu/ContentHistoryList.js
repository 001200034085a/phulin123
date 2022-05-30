import React, { useState } from "react";
import HistoryData from "../../data/HistoryData";
import ContentItem from "./ContentItem";

export default function ContentHistoryList(){
    const [data, setData]=useState(HistoryData);
    const [keyword, setKeyword]=useState('');

    const result=data.filter(item=>item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);
    return(
        <div className="content-history-list">
              
              <h3>Danh sách thông tin sơ lược</h3>
              <input type="text" placeholder="tìm kiếm" onChange={(event)=>setKeyword(event.target.value)} />
              
              <div className="list-history">
                  {result.map(history=>{
                    return(
                      <ContentItem key={history.id}
                      image={history.image}
                      name={history.name}
                      address={history.address}
                      country={history.country} />
                   )
              })}
              </div>
              
        </div>
    )
}