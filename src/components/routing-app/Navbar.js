import React from "react";
import { Button,Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import {Link,NavLink,useNavigate} from "react-router-dom";

export default function NavBar(){
    const navLinkClassName=({isActive})=>{
      return(
          isActive ? 'nav-link text-primary':'nav-link'
      )  
    } ;
    const navigate=useNavigate();
  
    return (
       <BsNavbar expand="lg" bg="light" >
            <Container>
                <BsNavbar.Brand>Routing App</BsNavbar.Brand>
                <Nav className="ms-auto" >
                    {/* <Nav.Link href="#" >home</Nav.Link>
                    <Nav.Link href="#" >about</Nav.Link>
                    <Nav.Link href="#" >contact</Nav.Link>
                    <Nav.Link href="#" >Welcome</Nav.Link> */}
                    <NavLink className={navLinkClassName} to="/">Home</NavLink>
                    <NavLink className={navLinkClassName} to="/Welcome">Welcome</NavLink>
                    <NavLink className={navLinkClassName} to="/product">product</NavLink>
                    <Button variant="primary" className="me-2" onClick={()=>navigate('/login')} >Login</Button>
                    <Button variant="outline-secondary" className="me-2" onClick={()=>navigate('/signup')} >SignUp</Button>
                </Nav>     
            </Container>
       </BsNavbar>
    )
}