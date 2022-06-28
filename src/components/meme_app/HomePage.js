import React,{useState,useEffect} from "react";
import { Row } from "react-bootstrap";
import MemeData from "../../data/MemeData";
import { getAllmemes } from "../../data/MemeData";
import MainContent from "./MainContent";

export default function HomePage(){
    const [memes, setMemes]=useState(MemeData);

    const getAllmemes =()=>{
        return MemeData;
    }

    useEffect(()=>{
      let data=getAllmemes();
      setMemes(memes)
    },[])
    return(
        <Row>
            <MainContent data={memes}/>
            
        </Row>
    )
}