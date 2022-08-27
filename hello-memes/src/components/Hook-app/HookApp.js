import React, { useState } from "react";
import CreateProductForm from "./CreateProductForm";



export default function HookApp(){
    const [products, setProducts]=useState([]);
    const [modal, setModal]=useState(true);

    const CreateProduct=(data)=>{
        setModal(false);
        setProducts([...products,data]);
    }
    console.log(products);

    return(
        <div className="hook-app">
           <h2>giới thiệu về hook </h2>
           <CreateProductForm onCreatedProduct={ CreateProduct} />
        </div>
    )
}