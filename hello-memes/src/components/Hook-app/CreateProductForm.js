import React from "react";
import { Col, Form, Row ,Button ,Container  } from "react-bootstrap";
import {useForm} from "../Hook-app/Hooks";

export default function CreateProductForm({onCreatedProduct}){

    const { handleSubmit, handleInputChange }=useForm();

    const handleCreateProduct=(data)=>{
        console.log("tạo một sản phẩm mới",data);
        onCreatedProduct(data);
    }
    
    const theSubmit=handleSubmit(handleCreateProduct);

    return(
      <Container>
        <Form onSubmit={theSubmit}>
            <h2>thêm sản phẩm</h2>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                       <Form.Label>Mã sản phẩm</Form.Label>
                       <Form.Control type="text" name="code" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleInputChange}/>
                    </Form.Group>
                </Col>
            </Row>
            
            
            <Form.Group className="mb-3">
                <Form.Label>Hãng sảm xuất</Form.Label>
                <Form.Control type="text" name="producer" onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>loại sản phẩm</Form.Label>
                <Form.Control type="text" name="category" onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>số lượng</Form.Label>
                <Form.Control type="text" name="quantity" onChange={handleInputChange}/>
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>khuyến mại</Form.Label>
                        <Form.Control type="text" name="discount" onChange={handleInputChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>giá thành</Form.Label>
                        <Form.Control type="text" name="price" onChange={handleInputChange}/>
                    </Form.Group>
                </Col>
            </Row>
            

            <Button type="submit" variant="primary" >hoàn tất</Button>

        </Form>
      </Container>     
    )
}