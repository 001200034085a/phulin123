import React from "react";
import ProductCart from "./ProductCart";

export default function MainCart(props){
    const {products,onAdd}=props;
    return(
        <main className="block col-2">
            <h2>products</h2>
            <div className="row">
                {products.map((product)=>(
                    <ProductCart key={product.id} product={product} onAdd={onAdd} />
                ))}
            </div>
        </main>
    )
}