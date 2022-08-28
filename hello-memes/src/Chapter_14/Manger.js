import React, { useState } from "react";
import { Avatar, List, Row, Col, notification, message, Popconfirm } from 'antd';
import PeopleData from "../data/PeopleData";
import CreatePeople from "./CreatePeople";
import {
    DeleteOutlined
  } from '@ant-design/icons';
import ItemManger from "./ItemManger";


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

    const onCreate =(first_name, last_name, email, gender, avatar, address, textarea)=>{
         const newItems ={
            id:people.length + 1,
            first_name:first_name,
            last_name:last_name,
            email:email,
            gender:gender,
            avatar:avatar,
            address:address, 
            textarea:textarea
         };
         setPeople([...people,newItems]);
    };

    const onEdit =(itemId, newFirst_name, newLast_name, newAddress, newGender, newAvatar, newEmail, newTextarea)=>{
        const newItem = [...people];
        for(let item of people){
            if(item.id === itemId){
                item.first_name = newFirst_name
                item.last_name = newLast_name
                item.avatar = newAvatar
                item.email= newEmail
                item.address = newAddress
                item.gender = newGender
                item.textarea = newTextarea
            }
        }
        setPeople(newItem);
    }

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
               dataSource={result.sort((a,b)=>a.first_name>b.first_name ? 1:-1)}
               renderItem={(item) => (

                <ItemManger key={item.id}
                id={item.id}
                first_name={item.first_name}
                last_name={item.last_name}
                avatar={item.avatar}
                email={item.email}
                address={item.address}
                gender={item.gender}
                textarea={item.textarea}
                deletePeople={deletePeople}
                onEdit={onEdit}
                 />
                // <List.Item>
                //     <List.Item.Meta
                //        avatar={<Avatar src={item.avatar} />}
                //        title={<a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>}
                //        description={
                //         <div>
                            
                //             <Row>
                //                 <Col>email:</Col>&nbsp;
                //                 <Col>{item.email}</Col>
                //             </Row> 
                //             <Row>
                //                 <Col>gender:</Col>&nbsp;
                //                 <Col>{item.gender}</Col>
                //             </Row>
                //             <Row>
                //                 <Col>address:</Col>&nbsp;
                //                 <Col>{item.address}</Col>
                //             </Row>
                //             <Row>
                //                 <Col>textarea:</Col>&nbsp;
                //                 <Col>{item.textarea}</Col>
                //             </Row>
                            
                //         </div>
                //        }
                //     />
                    
                //     <DeleteOutlined onClick={()=>deletePeople(item.id)} />
                // </List.Item>
                 )}
            />
        </>
    )
}