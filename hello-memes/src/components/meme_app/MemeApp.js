import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemeData from "../../data/MemeData";
import LoginForm from "../lichsu/LoginForm";
import SignupForm from "../lichsu/SignupForm";
import HomePage from "../meme_app/HomePage";
import MainContent from "./MainContent";
import MemeDetai from "./MemeDetai";
import Navbar from "./Navbar";

export default function MemeApp(){
    const [data, setData]=useState(MemeData);
    return(
        <BrowserRouter>
             <div className="meme-app">
                  <Navbar />
                 <Container >
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/login" element={<LoginForm/>} ></Route>
                        <Route path="/signup" element={<SignupForm/>} ></Route>
                        <Route path="/memes/:id" element={<MemeDetai/>} />
                    </Routes>
                 </Container>
             </div>
        </BrowserRouter>
        
    )
} 