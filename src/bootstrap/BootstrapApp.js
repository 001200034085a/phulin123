import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function BootstrapApp(){
    return(
        <Container fluid>
            <h2>This is the Bootstrap Container</h2>
            <Row>
                <Col sm>1</Col>
                <Col sm>2</Col>
                <Col sm>3</Col>
                <Col sm>4</Col>
            </Row>
        </Container>
    )
}