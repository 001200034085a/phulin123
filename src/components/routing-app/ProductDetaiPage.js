import React from "react";
import {useParams} from "react-router-dom";
import ProductData from "../../data/ProductData";

export default function ProductDeTaiPage(){
    const {id}=useParams();
    
    const found =ProductData.find((product)=>id==product.id);
    
    return(
        <div>
            {(!found) && <h2 className="text-danger">không tìm thấy giữ liệu</h2>}
            {(found)&&
                <div>
                    <h2>chi tiết sản phẩm</h2>
                    <b>id:{id}</b><br/>
                    <b>name:{found.name}</b><br/>
                    <b>năm:{found.year}</b><br/>
                    <b>giá:{found.discount}<sup>đ</sup></b><br/>
                    <b>name:{found.price}%</b><br/>
                </div>
            }
            
        </div>
    )
}