import React from "react";

export default function ProfileCard({name,address,photo,}){
    return(
        <div className="proflie-card">
            <img src={photo} alt="ảnh đại diện"></img>
            <p>họ vào tên:{name}</p><br/>
            <i>địa chỉ:{address}</i>
        </div>
    )
}
// chữ cái đầu của new file phải viết hoa