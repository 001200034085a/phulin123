import React from "react";

import {useParams} from "react-router-dom";
import HistoryData from "../../data/HistoryData";


export default function HistoryDetai(){
    const {id}=useParams();

    const found =HistoryData.find((product)=>id==product.id);
   
    return(
       
        <div className="history-detai">
             {(!found) && <h2 className="text-danger">không tìm thấy giữ liệu</h2>}
            {(found)&&
                <div>
                    <h2>Chi tiết các anh hùng</h2>
                    <b>Stt:{id}</b><br/>
                    <img src={found.image} /><br/>
                    <b>Tên:{found.name}</b><br/>
                    <b>Quê quán:{found.pob}</b><br/>
                    <b>Ngày sinh:{found.dob}</b><br/><br/>
                    <b>Xuất thân:{found.description}</b><br/><br/>
                    <b>Thời kỳ: {found.period}</b>
                    <b>Sự nghiệp:{found.career}</b><br/><br/>
                    <b>Thành tựu:{found.prize}</b>
                    
                </div>
            }
        </div>
    )
}