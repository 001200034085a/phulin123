import React, { useState } from "react";
import ProductData from "../../data/ProductData";
import {Link,Outlet} from "react-router-dom"
import { Container,Row,Col } from "react-bootstrap";

export default function ProductPage(){
    const [products, setProducts]=useState(ProductData);
    return(
        <div className="product-page">
           <h1>this is ProductPage</h1>
           <Container>
               <Row>
                   <Col>
                        <ul className="product-list" >
                            {products.map(product=><li key={product.id} >
                                <Link to={'/product/'+product.id} >{product.name}</Link>
                            </li>
                            )}
                       </ul>
                   </Col>
                   <Col>
                        <Outlet> </Outlet>
                   </Col>
               </Row>
           </Container>
           
          
        </div>
    )
}