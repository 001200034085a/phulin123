import React from "react";


export default function ThongTin1({name,image,dob,description,address,country,career,prize,evaluate,period}){
    return(
        <div className="thong-tin1">
            
             <div className="thong-tin1a">
                <img src={image} />
                <div className="thong-tin1b">
                    <b>Tên: {name}</b><br/>
                    <a>ngày sinh: {dob}</a><br/>
                    <c>Xuất thân: {description}</c><br/>
                    <d>Quê quán: {address}</d><br/>
                    <e>Quốc gia: {country}</e><br/>
                    <a>Chức vụ: {position}</a>
                </div> 
             </div>
                <div className="thong-tin1d">
                    <p>Thời kỳ: {period}</p>
                    <f>Chiến tích: {career}</f><br/><br/>
                    <h>Cống Hiến: {evaluate}</h><br/><br/>
                </div>
              
              <div className="thong-tin1c">
                <g>Vinh danh: {prize}</g><br/><br/>  
                <b>Huân Chương:{medal}</b><br/><br/>
                
              </div>
            
        </div>
    )
}