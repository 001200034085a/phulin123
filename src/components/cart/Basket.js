import React from "react"

export default function Basket(props){
  const {cartItems,setCartItems,onAdd,onRemove}=props;

  const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
  const taxPrice=itemsPrice*0.14;
  const shippingPrice=itemsPrice>2000 ? 0:50;
  const totalPrice=itemsPrice+taxPrice+shippingPrice;

  const checkOut=()=>{
    setCartItems([]);
    alert("quý khách đã thanh toán : "+ totalPrice +"$")
  }


  return(
    <aside className="block col-1">
       <h2>Cart Items</h2>
       
       {cartItems.map((item)=>(
         <div key={item.id} className="row">
           <div className="col-2">{item.name}</div>
           <img className="col-2" src={item.image} />
           <div className="col-2">
             <button onClick={()=>onAdd(item)} className="add">+</button>
             <button onClick={()=>onRemove(item)} className="remove">-</button>
           </div>
           <div className="col-2 text-right">
             {item.qty}x${item.price.toFixed(2)}
           </div>
         </div>
       ))}
       
       <hr/>
       {cartItems.length===0 &&<div>Cart Is Empty</div>}
       {cartItems.length !==0 && (

         <div >
           
           <div className="row"> 
              <div className="col-2">items price</div>
              <div className="col-1 text-right" >
                 {itemsPrice.toFixed(2)}$
              </div>
           </div> 
           <div className="row"> 
              <div className="col-2">tax price</div> 
              <div className="col-1 text-right" >
                 {taxPrice.toFixed(2)}$
              </div>
           </div> 
           <div className="row"> 
           <div className="col-2">shipping price</div> 
              <div className="col-1 text-right" >
                 {shippingPrice.toFixed(2)}$
              </div>
           </div> 
           <div className="row"> 
              <div className="col-2"><strong>total price</strong></div> 
              <div className="col-1 text-right" >
                 <strong>{totalPrice.toFixed(2)}$</strong>
              </div>
           </div> 
           <div className="row">
             <hr/>
             <button onClick={checkOut} >mua</button>
           </div>
           
         </div>
         
       )}
    </aside>
  )
}