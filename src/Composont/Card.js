import '../App.css'
import axios from "axios";
import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getuser} from '../action/actions'
import { getplat} from '../action/plataction'
import {Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const Cards = () => {
 //
 const plats = useSelector(state=>state.platstore)
 const dispatch1 = useDispatch()
 useEffect(() => {
    dispatch1(getplat());
  },[]);
  console.log(plats, "did we ?");
 
  return (
    <div >
 <p class="titre p-2">Nos plats Tunisien  </p>
 <div class="row justify-content-evenly p-2">
 {plats.map((el,key)=>(
  <Col md={3} className="justify-self-center">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.image}  />
    <Card.Body>
      <Card.Title> {el.platsprincipaux} </Card.Title>
      <Card.Text>
      <p>{el.entres} </p>
      {el.desserts}-{el.sauces}
      {el.prix}
      </Card.Text>
      <Button variant="primary">Commander</Button>
    </Card.Body>
  </Card>
  </Col>
   ))}
</div>
    </div>
  


  
  );
}

export default Cards;
