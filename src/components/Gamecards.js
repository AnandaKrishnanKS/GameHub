import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Gamecards({ gameinfo }) {
  return (
    <>
      <Link className="txtstyl" to={`/Gameview/${gameinfo.id}`}>
      <Card id="popefect" className=" ms-auto me-auto bg-black text-white text-opacity-100 bg-opacity-50 rounded p-1 m-4 " style={{ width: "18rem"}}>
          <Card.Img  variant="top" className="rounded-top" style={{ backgroundColor:"#FF6EC7",height:"18rem" }} src={gameinfo.imageUrl} />
          <Card.Body>
            
            <h3>{gameinfo.name}</h3>
            
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default Gamecards;
