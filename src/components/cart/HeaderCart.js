import React from "react";
import {
    ShoppingCartOutlined,
    LoginOutlined
  } from '@ant-design/icons';

export default function HeaderCart(props){
    const {countCartItems}=props;
    return(
        <div>
            <header className="row block center">
                <div>
                    <a href="#">Small Shopping Cart</a>
                </div>
                <div>
                    <a href="#">
                       <ShoppingCartOutlined />
                       {countCartItems ? <button className="badge">{countCartItems}</button>:""}
                    </a>
                    &nbsp;&nbsp;
                    <a href="#">
                    <LoginOutlined />
                    </a>
                </div>
            </header>
        </div>
    )
}
