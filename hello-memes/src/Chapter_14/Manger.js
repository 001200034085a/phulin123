import React, { useState } from "react";
import { Avatar, List, Row, Col, notification, message, Popconfirm } from 'antd';
import PeopleData from "../data/PeopleData";
import CreatePeople from "./CreatePeople";
import {
    DeleteOutlined
  } from '@ant-design/icons';


export default function Manger(){
    const [people, setPeople] = useState(PeopleData);
    const [keyword, setKeyword] = useState('');
    
    
    const result=people.filter(item=>item.first_name.toLowerCase().indexOf(keyword.toLowerCase())>-1);

    const deletePeople = (id)=>{
        const remove = [...people].filter(x => x.id !== id);
        setPeople(remove);
        notification['success']({
            message:"delete this member success",
            duration:3
        })
    };

    const onCreate =(first_name, last_name, email, gender, avatar, address)=>{
         const newItems ={
            first_name:first_name,
            last_name:last_name,
            email:email,
            gender:gender,
            avatar:avatar,
            address:address
         };
         setPeople([...people,newItems]);
    };

   const confirmDelete=()=>{
      setPeople([])
   };
   const cancel=()=>{
      return;
   }

    return(
        <>
        <Row>
            <Col><h1>số người trong danh sách:{result.length}</h1></Col>
            <Col className="deleteAll" ><Popconfirm
           title="Are you sure to delete this task?"
           onConfirm={confirmDelete}
           onCancel={cancel}
           okText="Yes"
           cancelText="No"
            >
         <a href="#">Delete All</a>
        </Popconfirm></Col>
        </Row>
        <input type="text" placeholder="tìm kiếm" onChange={(event)=>setKeyword(event.target.value)} /><br/><br/><hr/>

        <CreatePeople onCreate={onCreate} />
        
           <List
               itemLayout="horizontal"
               dataSource={result}
               renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                       avatar={<Avatar src={item.avatar} />}
                       title={<a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>}
                       description={
                        <div>
                            
                            <Row>
                                <Col>email:</Col>&nbsp;
                                <Col>{item.email}</Col>
                            </Row> 
                            <Row>
                                <Col>gender:</Col>&nbsp;
                                <Col>{item.gender}</Col>
                            </Row>
                            <Row>
                                <Col>address:</Col>&nbsp;
                                <Col>{item.address}</Col>
                            </Row>
                            
                        </div>
                       }
                    />
                    
                    <DeleteOutlined onClick={()=>deletePeople(item.id)} />
                </List.Item>
                 )}
            />
        </>
    )
}