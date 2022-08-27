import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MemeData from "../../data/MemeData";

export default function MemeDetai(){
    const {id}=useParams();
    const [meme, setMeme]=useState('');

    const getMemeById=(id)=>{
        return MemeData.find((meme)=>meme.id==id)
    }
    
    useEffect(()=>{
         let data=getMemeById(id);
         setMeme(data)
    },[id])

    return(
        <Container className="meme-detai">
            <Row>
                <Col sm={4}>
                   <img src={meme.image} />
                </Col>
                <Col>
                 <div>id:<b>{meme.id}</b></div>
                 <div>name:<b>{meme.name}</b></div>
                 <div>
                     categories:<br/>
                     <b>{meme.categories}</b>
                     </div>
                 <div>
                     description:<br/>
                     <b>{meme.description}</b>
                     </div>
                 <div>date modified:<b>{meme.dateModified}</b></div>
                </Col>
            </Row>
        </Container>
    )
}