import React, { useState } from "react";

import {Link,Outlet} from "react-router-dom"
import { Container,Row,Col } from "react-bootstrap";
import HistoryData from "../../data/HistoryData";



export default function ContentHistory(){
     const [history, setHistory]=useState(HistoryData);
     const [keyword, setKeyword]=useState('');
    
     const result=history.filter(item=>item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);

    return(
        <div className="content-history">
             <h3>Danh sách các anh hùng vn</h3>
             
             <input type="text" placeholder="tìm kiếm" onChange={(event)=>setKeyword(event.target.value)} />
             <Container>
               <Row>
                   <Col>
                        <ul className="history-list" >
                            {result.map(history=><li key={history.id} >
                                <Link to={''+history.id}>{history.name}</Link>
                                
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