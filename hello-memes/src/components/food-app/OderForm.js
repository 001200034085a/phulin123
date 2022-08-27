import React, { useState } from "react";
import { Badge, Button, Form, ListGroup, Modal } from "react-bootstrap";
import OrderItem from "./OrderItem";

export default function OderForm({orders,onIncreaseAmount,onDecrreaseAmount}){
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [readyToOrder, setReadyToOrder]=useState(false);
    
    let totalItems=0;
    let totalPrice=0;
    for(let order of orders){
        totalItems += order.amount;
        totalPrice += order.price*order.amount;
    }
    
    return(
        <div className="oder-form">
           <Button variant="info" onClick={()=>setIsModalOpen(true)} >
               <span className="me-2">you cart</span>
               <Badge pill bg="light" text="dark" >{totalItems}</Badge>
           </Button>
           <Modal show={isModalOpen} onHide={()=>setIsModalOpen(false)} >
               <Modal.Header closeButton >
                   you cart
               </Modal.Header>
               <Modal.Body>
                   <ListGroup>
                       {orders.map(order=><ListGroup.Item>
                             <OrderItem order={order} onIncreaseAmount={onIncreaseAmount} onDecrreaseAmount={onDecrreaseAmount} />
                       </ListGroup.Item>)}
                   </ListGroup>
                   <b className="text-danger mt-3">Total Price:${totalPrice}</b>
                   <Form className="mt-3" hidden={!readyToOrder}>
                       <Form.Group>
                           <Form.Label>tên</Form.Label>
                           <Form.Control type="text"  />
                       </Form.Group>
                       <Form.Group>
                           <Form.Label>số điện thoại</Form.Label>
                           <Form.Control type="number" />
                       </Form.Group>
                       <Form.Group>
                           <Form.Label>địa chỉ</Form.Label>
                           <Form.Control type="text" />
                       </Form.Group>
                   </Form>
               </Modal.Body>
               <Modal.Footer>
                   {readyToOrder ? <Button >Order Now</Button> :<Button variant="success" onClick={()=>setReadyToOrder(true) }>Make an order</Button>}
               </Modal.Footer>
           </Modal>
        </div>
    )
}