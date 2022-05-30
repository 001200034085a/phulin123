import React from "react";
import NavBar from "./Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import HomePage from "./HomePage";
import WelcomePage from "./WelcomePage";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ProductDeTaiPage from "./ProductDetaiPage";
import GirlfriendPage from "../routing-app/GirlfriendPage";


export default function RoutingApp(){
    return(
        <BrowserRouter>
            <div className="routing-app">
                <NavBar />
                <Container className="page-content">
                    <Routes> 
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/welcome" element={<WelcomePage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/signup" element={<SignupPage/>} />

                        {/* <Route path="/product" element={<ProductPage/>} />
                        <Route path="/product/:id" element={<ProductDeTaiPage/>} /> */}
                        <Route path={"/product"} element={<ProductPage/>} >
                            <Route path={":id"} element={<ProductDeTaiPage/>} > </Route>
                        </Route>
                        <Route path="/girlfriend/:name/:age/:address" element={<GirlfriendPage/>} />
                        <Route path="*" element={<h2 className="text-danger">404 not found</h2>} />
                    </Routes>
                </Container>
                
           </div>
        </BrowserRouter>
        
    )
}