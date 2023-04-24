
import { Col, Container, Row } from 'react-bootstrap'
import Gamecards from './Gamecards'
import { React,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import gameList from '../action/gameAction'

function Main() {
 

  const dispatch =useDispatch()

    useEffect(()=>{
      dispatch(gameList())
    },[]
  )

   const{gamedataList}= useSelector(state=>state.gamesReducer)
   

  return (

    <>
    <Container>
      <Row className='p-4'>
        {
    
    
    gamedataList.map(item=>(

            <Col lg={4} md={6}>

            <Gamecards gameinfo={item}/>

            </Col>
           
          ))
    
    
          }
      </Row>
    </Container>
    </>
  )
}

export default Main