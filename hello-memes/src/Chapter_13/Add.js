import React, { Component, useEffect, useState } from "react";
import User from "./User";
import DataUser from "../data/db.json";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listInfo:DataUser,
    };
  }

  handleDeleteAll = () => {
    this.setState({
        listInfo:[]
    });
    document.write('<h1>danh sách trống</h1>');
  };
  
  render() {
    return (
      
      <div>
        {this.state.listInfo.map((data) => (
          <User
            key={data.id}
            name={data.name}
            age={data.age}
            birthdate={data.birthdate}
            avatar={data.avatar}
            address={data.address}
          />
        ))}
        <button onClick={this.handleDeleteAll}>Xóa tất cả</button>   
      </div>
    );
  }
}

export default Add;

// export default function Add(){
//     const [data, setData] = useState(DataUser);

//     const handleDeleteAll =()=>{
//         setData([]);
//         document.write("<h1>danh sách trống<h1/>")
//     };


//     return(
//        <div>
//           {data.map(data=>{
//             return(
//                 <div>
//                     <User 
//                     key={data.id}
//                     name={data.name}
//                     age={data.age}
//                     birthdate={data.birthdate}
//                     avatar={data.avatar}
//                     address={data.address}
//                     />
                    
//                 </div>  
//             )
//           })}
//           <button onClick={handleDeleteAll}>xóa tất cả</button>
//         </div>
        
//     )
// }