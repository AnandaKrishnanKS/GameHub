import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Gameview() {
  const params = useParams();

  
  const{gamedataList}= useSelector(state=>state.gamesReducer)
 
  
  const gameid = gamedataList.find((item)=>item.id==params.id)


  return (
    <> {
      gameid?(

        <Container
        className="text-center pt-5 bg-light bg-opacity-50 rounded my-5"
        style={{ width: "75%" }}
      >
        <Row>
          <Col className="d-flex justify-content-center">
            <img className="w-75 mt-auto my-auto rounded"
              src={gameid.imageUrl}
              alt="..."
            />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h2 className="text-white bg-dark p-3 rounded bg-opacity-50 mt-3">
              <i>
                <strong>{gameid.name}</strong>
              </i>
            </h2>
            <p className="text-white bg-dark p-3 rounded bg-opacity-50">
              {gameid.guide}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="btn btn-success m-5">
              <Link className="txtstyl text-white" to={gameid.linktopaly}>Start Game</Link>
            </button>
          </Col>
        </Row>
      </Container>

      ):("")
    }
      
    </>
  );
}

export default Gameview;
