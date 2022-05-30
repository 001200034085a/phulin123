import React, { useState } from "react";
import HistoryData from "../../data/HistoryData";
import ChienTich1 from "./ChienTich1";

const ThongTin = () => {
  const [data, setData]=useState(HistoryData)
  return (
    <div >
      {data.map(item=>{
        return(
          <ChienTich1 key={item.id}
          name={item.name}
          career={item.career}
          evaluate={item.evaluate}
           />
        )
      })}
    </div>
  );
};

export default ThongTin;