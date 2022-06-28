import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MemeContainer({id,name,categories,dateModified,description,image}){
    return(
        <Container className="meme-container border mb-3" >
            <Row>
               <Col sm={12} className="text-center" >
                  <Link to={"/memes/" + id}><img src={image} /></Link> 
               </Col>
               <Col sm={12} className="text-center"> 
                   <b>{name}</b>
               </Col>
            </Row>
        </Container>
        
    )
}