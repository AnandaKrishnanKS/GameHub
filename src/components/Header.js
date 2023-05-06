import React from "react";
import Nav from "react-bootstrap/Nav";


function Header() {
  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container p-3">
          <a className="navbar-brand "  href="/">
            <h2><span className="bg-black p-1 py-0 rounded-start">Game</span><span className="p-1 py-0 rounded text-black" style={{backgroundColor:"#ff9900"}}>hub</span></h2>
          </a>
          <button  className="btn bg-black text-white">send feedback</button>
        </div>
        
      </Nav>

    </>
  );
}

export default Header;
