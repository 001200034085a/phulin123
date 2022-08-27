import React, {useContext} from "react";
import { Nav, Navbar as BsNavbar, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext, logout } from "../Dangky/user";

export default function Navbar(){
    const activeClassName = ({ isActive }) =>isActive ? "nav-link p-4 text-primary " : "nav-link p-4";

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const logoutUser = () => {
        const json = logout();
        auth.setCurrentUser(json);
        navigate("/login");
      };

    return(
        <BsNavbar expand="lg" bg="light" >
           <BsNavbar.Brand><h2><i>Anh Hùng Dân Tộc</i></h2></BsNavbar.Brand>
           <BsNavbar.Brand href="/" className="ms-5">
              <img
                src="https://vn-test-11.slatic.net/p/a49378a595c3ee8579ebab3e8ad59883.jpg"
                alt=""
                width="70px"
              />
            </BsNavbar.Brand>
            
           <BsNavbar.Toggle aria-control="my-navbar"/>
           
           
           <BsNavbar.Collapse id="my-navbar" >
               <Nav>
               <NavLink to="/" className={activeClassName}>
              Home Page
            </NavLink>
            <NavLink to="/tt" className={activeClassName}>
              Thông tin
            </NavLink>
            <NavLink to="/login" className={activeClassName}>
              đăng nhập
            </NavLink>
            <NavLink to="/signup" className={activeClassName}>
              đăng ký
            </NavLink>
          </Nav>          
        </BsNavbar.Collapse>
        
        </BsNavbar>
    )
}