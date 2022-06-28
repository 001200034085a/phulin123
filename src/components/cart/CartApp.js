import React, { useState } from "react";
import HeaderCart from "./HeaderCart";
import MainCart from "./MainCart";
import Basket from "./Basket";
import "./cart.css";
import CartData from "../../data/CartData";

export default function CartApp(){
    const {products}=CartData;
    const [cartItems, setCartItems]=useState([]);
    const onAdd=(product)=>{
        const exist=cartItems.find(x=>x.id===product.id);
        if(exist){
            setCartItems(cartItems.map(x=>x.id===product.id ? {...exist,qty:exist.qty+1}:x))
        }
        else{
            setCartItems([...cartItems,{...product,qty:1}])
        }
    }
    const onRemove=(product)=>{
        const exist=cartItems.find(x=>x.id===product.id);
        if(exist.qty===1){
            setCartItems(cartItems.filter((x)=>x.id !==product.id))
        }
        else{
            setCartItems(cartItems.map(x=>x.id===product.id ? {...exist,qty:exist.qty-1}:x))   
        }
    }

 return(
    <div >
        <HeaderCart countCartItems={cartItems.length} />
        <div className="row">
            <MainCart onAdd={onAdd} products={products} />
            <Basket onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} setCartItems={setCartItems}/>
        </div>
    </div>
 )
}