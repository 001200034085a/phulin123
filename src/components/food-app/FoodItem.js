
import React, { useState } from "react";
import { Badge, Container, Form, Row,Button ,Col  } from "react-bootstrap";


export default function FoodItem({food, onAddToCart}){
    const  [amount, setAmount ]=useState(0);
    return(
        <Container className="food-item">
            <Row>
                <Col sm={3}><img  src={food.image} className="w-100" /></Col>
                <Col sm={6}>
                    <h3>{food.name}</h3>
                    <div className="text-muted">{food.description}</div>
                    <Badge bg="primary">${food.price}</Badge>
                    </Col>
                <Col sm={3}>
                    <div className="mb-2 d-flex align-items-center">
                        <span className="me-2">Amount:</span>
                        <Form.Control type="number" min={0} onChange={(event)=>setAmount(Number(event.target.value))} />
                    </div>
                    <Button variant="primary" onClick={()=>onAddToCart(food,amount)} >+ Add</Button>
                </Col>
            </Row>
        </Container>
    )
}