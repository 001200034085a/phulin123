import React, { useState } from "react";

export default function LikeItem({name,like,date,content,id,onEditItem,onLikeItem,onDeleteItem}){
    const [isEditing, setIsEditing]=useState(false);
    const [newContent, setNewContent]=useState('');
    const [count, setCount] = useState(0)
    
   const edit=()=>{
       onEditItem(id,newContent);
       setIsEditing(false);
       setNewContent('')
   }
   const enableEdit=()=>{
       console.log("chuyển dữ liệu sang"+id)
       setIsEditing(true);

   }
   const changeNewContent=(event)=>{
       setNewContent(event.target.value)
   }
   const likeItem=()=>{
       onLikeItem(id)  
   }
   const deleteItem=(event)=>{
       onDeleteItem(id)
      
   }
return(
    <div className="jav-item" >
        <c>{name}</c>
        {isEditing ? <input type="text" defaultValue={content} onChange={changeNewContent}/>:<b>{content}</b> }
        <i>{date}</i>
        <code>{like}</code>

        <div className="item-action">
           {isEditing ? <button onClick={edit} >lưu</button>:<button onClick={enableEdit}>sửa</button>}
           <button onClick={deleteItem}>xóa</button>
           
           <button onClick={likeItem} >like</button>
        </div>
    </div>
)
}