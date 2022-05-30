import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { AuthContext, logout } from "../Dangky/user";


export default function NavbarHistory(){
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const activeClassName = ({ isActive }) =>isActive ? "nav-link p-4 text-primary " : "nav-link p-4";

  const logoutUser = () => {
    const json = logout();
    auth.setCurrentUser(json);
    navigate("/login");
  };
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="ab">
          <Nav>
            <Nav.Link className="ms-5"><h2><i>Anh Hùng Dân Tộc</i></h2></Nav.Link>
            <Navbar.Brand href="#home" className="ms-5">
              <img
                src="https://vn-test-11.slatic.net/p/a49378a595c3ee8579ebab3e8ad59883.jpg"
                alt=""
                width="70px"
              />
            </Navbar.Brand>
          </Nav>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {auth.currentUser ? (
            <>
              <NavLink
                className="nav-link"
                to="/me"
              >{`Xin chào ${auth.currentUser.name}`}</NavLink>
              <Button
                variant="outline-primary"
                className="me-2"
                onClick={logoutUser}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline-secondary"
                className="me-2"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>{" "}
              <Button
                variant="outline-secondary "
                className="me-2"
                onClick={() => navigate("/signup")}
              >
                Signup
              </Button>
            </>
          )}
        </div>
        </Navbar>
      <Navbar bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Nav>
            <NavLink to="/" className={activeClassName}>
              Trang chủ
            </NavLink>
            <NavLink to="/tt" className={activeClassName}>
              Thông tin
            </NavLink>
            <NavLink to="/tk" className={activeClassName}>
              Thời kỳ
            </NavLink>
            <NavLink to="/ct" className={activeClassName}>
              Chiến tích
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};