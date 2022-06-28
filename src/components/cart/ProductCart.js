import React from "react";

export default function ProductCart(props){
    const {product,onAdd}=props;
    return(
        <div>
            <img className="small" src={product.image} />
            <div>{product.name}</div>
            <div>{product.price}$</div>
            <div>
                <button onClick={()=>onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    )
}