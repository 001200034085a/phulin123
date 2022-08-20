import React, { Component } from "react";


class User extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    const { name, age, birthdate, avatar, address } = this.props;
    return (
      <div>
         <p>
          Tên:<b>{name}</b>
        </p>
        <p>
          Tuổi:<b>{age}</b>
        </p>
        <p>
          Năm sinh :<b>{birthdate}</b>
        </p>
        <p>
          Avarta : <img src={avatar} />
        </p>
        <p>
          Quê Quán :<b>{address}</b>
        </p>
        <hr/>
      </div>
    );
  }
}

export default User;