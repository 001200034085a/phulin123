import React, { useEffect, useState } from "react";
import { Container, ListGroup, Navbar, NavbarBrand } from "react-bootstrap";
import axios from "axios";
import FoodItem from "./FoodItem";
import OderForm from "./OderForm";


export default function FoodApp(){
    const [foods, setFoods]=useState([]);
    const [orders, setOrders]=useState([]);

    useEffect((decrreaseAmount)=>{
        axios.get('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals').then((reponse)=>{
            setFoods(reponse.data)
        })
    },[])
    
    const onAddToCart=(food,amount)=>{
        let tmp={...food,amount:amount};
        let newOrders=[...orders,tmp];
        setOrders(newOrders);
    }

    const increaseAmount=(order)=>{
        let newOrders=[...orders];
        let foundOrder=newOrders.find(item=>item.id==order.id);
        if(!foundOrder) return;

        foundOrder.amount +=1;
        setOrders(newOrders)
    }
    const decrreaseAmount=(order)=>{
        let newOrders=[...orders];
        let foundOrder=newOrders.find(item=>item.id==order.id);
        if(!foundOrder) return;

        foundOrder.amount -=1;
        setOrders(newOrders.filter(item=>item.amount !=0))
    }
    const makeAnOrder=(data)=>{
        axios.post('POST https://625a91bf0ab4013f94a2d9a8.mockapi.io/orders',data).then(()=>{
            alert("order thành công")
        })
    }

    return(
        <div className="food-app">
          <Container>   
            <Navbar>
                <Navbar.Brand>React FoodApp</Navbar.Brand>
                <OderForm orders={orders} onIncreaseAmount={increaseAmount} onDecrreaseAmount={decrreaseAmount} />
            </Navbar>
            <Container className="mt-3">
                <h2>Food List</h2>
                <ListGroup>
                    {foods.map(food=><ListGroup.Item>
                        <FoodItem key={food.id} food={food} onAddToCart={onAddToCart}   />
                    </ListGroup.Item>)}
                </ListGroup>
            </Container>
         </Container>   
        </div>
    )
}