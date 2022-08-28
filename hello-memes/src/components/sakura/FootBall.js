import React, { useState } from "react";

export default function FootBall(){
    const [data, setData]=useState([
        {"id":1,"name":"Man City","points":"99","gd":"45"},
        {"id":2,"name":"Chelsea","points":"75","gd":"49"},
        {"id":3,"name":"Manchester UniTed","points":"60","gd":"99"},
        {"id":4,"name":"Liverpool","points":"88","gd":"39"},
        {"id":5,"name":"Alentico Madrid","points":"99","gd":"52"},
        {"id":6,"name":"Barcelona","points":"99","gd":"52"},
        {"id":7,"name":"Arsenal","points":"99","gd":"52"},
        {"id":8,"name":"Psg","points":"99","gd":"45"},
        {"id":8,"name":"AMG","points":"99","gd":"52"},

    ]);

 
    return(
        <div>
            <h1>bảng đấu các đội bóng</h1>
          {data && data
          .sort((e,f)=>e.name>f.name ? 1:-1)
          .sort((c,d)=>c.gd>d.gd ? 1:-1)
          .sort((a,b)=>a.points<b.points ? 1:-1)
          .map(item=>{
              return(
                  <div key={item.id}>
                      {item.name}--{item.points}--{item.gd}
                  </div>
              )
          })}
        </div>       
    )
}