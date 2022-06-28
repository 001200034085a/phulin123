import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MemeContainer from "./MemeContainer";

export default function MainContent({data}){
    const [keyword, setKeyword]=useState('');

    const result=data.filter(item=>item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);

    return(
        <div className="mai-content">
            <Form className="search-meme-form">
                  <Form.Control type="text" placeholder="search" onChange={(event)=>setKeyword(event.target.value)} />
            </Form>
            <Container className="meme-list mt-3">
              <Row >
                {result.map(item=><Col lg={4} md={6} sm={12}>
                        <MemeContainer key={item.id}
                        id={item.id}
                        name={item.name}
                        categories={item.categories}
                        description={item.description}
                        dateModified={item.dateModified}
                        image={item.image}
                        
                         />
                  </Col>  
                )}
              </Row>
            </Container>
           
        </div>
    )
}