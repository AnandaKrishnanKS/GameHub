
import Nav from "react-bootstrap/Nav";
import {React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactUs from "./ContactUs";



function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submit=()=>{
    alert("thank you for your feed back")
    setShow(false)
  }

  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container p-3">
          <a className="navbar-brand "  href="/">
            <h2><span className="bg-black p-1 py-0 rounded-start">Game</span><span className="p-1 py-0 rounded text-black" style={{backgroundColor:"#ff9900"}}>hub</span></h2>
          </a>

        <Button  className="btn bg-black text-white" onClick={handleShow} >send feedback</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"linear-gradient(to right, yellow ,#FF6EC7)"}}>
          <ContactUs />
        </Modal.Body>
      </Modal>
        </div>
        
      </Nav>

    </>
  );
}

export default Header;
