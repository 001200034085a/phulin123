import React from "react";

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
                       cart {""}
                       {countCartItems ? <button className="badge">{countCartItems}</button>:""}
                    </a>
                    &nbsp;
                    <a href="#">
                        signIn
                    </a>
                </div>
            </header>
        </div>
    )
}