import React, { Component } from "react";
import User from "./User";
import DataUser from "../data/db.json";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listInfo: DataUser,
    };
  }

  handleDeleteAll = () => {
    this.setState({
      listInfo: [],
    });
    document.write('<h1>danh sách trống<h1/>')
  };
  
  render() {
    return (
      <div>
        {this.state.listInfo.map((data) => (
          <User
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