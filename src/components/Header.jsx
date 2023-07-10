import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Главная</Nav.Link>
          <Nav.Link onClick={() => navigate("/me")}>Обо мне</Nav.Link>
          <Nav.Link onClick={() => navigate("/work")}>О работе</Nav.Link>
          <Nav.Link onClick={() => navigate("/hobbies")}>О хобби</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
