import '../App.css'
import axios from "axios";
import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getuser,addUser,deleteuser,updateUser} from '../action/actions'
import { getplat} from '../action/plataction'
import { getcommande} from '../action/commandeaction'
import { getadmin} from '../action/adminaction'
import {Col} from 'react-bootstrap'
import Admin from '../image/img2.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Updteuser from "./modal"


const Dashborad = () => {
 //user
  const users = useSelector(state=>state.userstore.datas)
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getuser());
   },[]);
   console.log(users, "did we ?");




//dispatch function
const dispatch5 = useDispatch()

// récupération val input

const [Input,setInput] = useState(
  {
    nom : "", 
    prenom : "", 
    email:"",
    adress : "",
    image :"",
    motpass : ""
  }
)


const handelChange=(e)=>{
  const {name,value}= e.target 
  setInput({
    ...Input,
    [name]: value
  });
  }

//add to db

  const handelSubmit=(e)=>{
   e.preventDefault()
    dispatch5( addUser(Input.nom,Input.prenom,Input.email,Input.adress,Input.image,Input.motpass))
   
    console.log('val input', Input)
  }

//delet
const userdelete =(id)=>{
  dispatch (deleteuser(id) )
  console.log("rr",(id))
}


//pat 

const plats = useSelector(state=>state.platstore)
const dispatch1 = useDispatch()
useEffect(() => {
   dispatch1(getplat());
 },[]);
 console.log(plats, "did we ?");


 //commande


 const commandes = useSelector(state=>state.commandestore)
 const dispatch2 = useDispatch()
 useEffect(() => {
    dispatch2(getcommande());
  },[]);
  console.log(commandes, "did we ?");
 
//admin

const admins = useSelector(state=>state.adminstore)
  const dispatch3 = useDispatch()
  useEffect(() => {
     dispatch3(getadmin());
   },[]);
   console.log(admins, "did we ?");




//   const [user,setUser]=useState([]);
//   const getuser = () =>{
//     axios
//     .get("/app/getuser")
//     .then((res)=>{
//        console.log("run",res.data);
//       var x=res.data;
//       setUser(x);
//     })
//     .catch ((error => console.error(error)));
//   };
// useEffect(()=>{
//   getuser();
// },[]);
/////////////////////////
// const [plat,setPlat]=useState([]);
// const getplat = () =>{
//   axios
//   .get("/app/getplat")
//   .then((res)=>{
//      console.log("run",res.data);
//     var y=res.data;
//     setPlat(y);
//   })
//   .catch ((error => console.error(error)));
// };
// useEffect(()=>{
// getplat();
// },[]);

  return (
    <div>
    <div class="container-fluid">
<div class="d-flex align-items-start  p-5">
  <div class="nav flex-column nav-pills me-3 barre" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <Col xs={2} md={1}>
<img className="admin" src={Admin} alt=""/>
    </Col>

    <button class="nav-link active " id="v-pills-user-tab" data-bs-toggle="pill" data-bs-target="#v-pills-user" type="button" role="tab" aria-controls="v-pills-user" aria-selected="true">Users</button>

    <button class="nav-link  " id="v-pills-Ajouteruser-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Ajouteruser" type="button" role="tab" aria-controls="v-pills-Ajouteruser" aria-selected="true">Ajouter Users</button>

    <button class="nav-link" id="v-pills-plat-tab" data-bs-toggle="pill" data-bs-target="#v-pills-plat" type="button" role="tab" aria-controls="v-pills-plat" aria-selected="false">Plats</button>
  
    <button class="nav-link" id="v-pills-Ajouterplat-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Ajouterplat" type="button" role="tab" aria-controls="v-pills-Ajouterplat" aria-selected="false">Ajouter Plats</button>

   <button class="nav-link" id="v-pills-commande-tab" data-bs-toggle="pill" data-bs-target="#v-pills-commande" type="button" role="tab" aria-controls="v-pills-commande" aria-selected="false">Commandes</button>
   
   <button class="nav-link" id="v-pills-Ajouteradmin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Ajouteradmin" type="button" role="tab" aria-controls="v-pills-Ajouteradmin" aria-selected="false">Ajouter Admin</button>

    <button class="nav-link" id="v-pills-profil-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profil" type="button" role="tab" aria-controls="v-pills-profil" aria-selected="false">Mon Profil</button>
  </div>

  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-user" role="tabpanel" aria-labelledby="v-pills-user-tab">
    <Row  className="justify-content-around  ">
    {users.map((el,key)=>(
      <Col md={3} className="justify-content-evenly">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image}  />
  <Card.Body>
    <Card.Title> {el.nom}-{el.prenom} </Card.Title>
    <Card.Text>
    <p> ID={el._id}</p>
    {el.adress}-{el.email}
    </Card.Text>
      <button onClick={() => userdelete(el._id)}   class="bttn"><img src="https://img.icons8.com/ios/30/000000/delete--v1.png"/></button>
      <Updteuser  id={el._id}  el={el} />

  </Card.Body>
</Card>
</Col>
 ))}
</Row>
    </div>
    <div class="tab-pane fade " id="v-pills-Ajouteruser" role="tabpanel" aria-labelledby="v-pills-Ajouteruser-tab">
    
    <Form onSubmit={handelSubmit}>

  <Form.Group className="mb-3" >
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text" placeholder="Enter Nom" onChange={handelChange}  name="nom" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Prenom</Form.Label>
    <Form.Control type="text" placeholder="Entrer Prenom" onChange={handelChange}  name="prenom" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Entrer Email" onChange={handelChange}  name="email" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Adress</Form.Label>
    <Form.Control type="text" placeholder="Entrer Adress" onChange={handelChange}  name="adress" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Entrer Path de l'image" onChange={handelChange}  name="image"/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="Entrer le mot de passe" onChange={handelChange}  name="motpass"/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Ajouter 
  </Button>
</Form>
    </div>

    <div class="tab-pane fade" id="v-pills-plat" role="tabpanel" aria-labelledby="v-pills-plat-tab">
<Row  className="justify-content-around  ">
    {plats.map((el,key)=>(
      <Col md={3} className="justify-self-center">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Text>
      <p> Entreé sont : {el.entres}</p>
      <p>Plat parincipaux : {el.platsprincipaux}</p>
      <p>Desserts : {el.desserts}</p>
      <p> sauces{el.sauces}</p>
    <p> ID={el._id}</p>
    </Card.Text>
    <Button variant="primary">Modifier</Button>
    <button class="bttn"><img src="https://img.icons8.com/ios/30/000000/delete--v1.png"/></button>
  </Card.Body>
</Card>
</Col>
 ))}
</Row>
    </div>

    <div class="tab-pane fade " id="v-pills-Ajouterplat" role="tabpanel" aria-labelledby="v-pills-Ajouterplat-tab">
    <Form>

<Form.Group className="mb-3" >
  <Form.Label>Plat parincipaux</Form.Label>
  <Form.Control type="text" placeholder=" Entrer Plat parincipaux" />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Entres</Form.Label>
  <Form.Control type="text" placeholder="Entrer Entres" />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Desserts</Form.Label>
  <Form.Control type="text" placeholder="Entrer Desserts" />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Souces</Form.Label>
  <Form.Control type="text" placeholder="Entrer Souces" />

</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Prix</Form.Label>
  <Form.Control type="text" placeholder="Entrer Prix" />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Image</Form.Label>
  <Form.Control type="password" placeholder="Entrer Path de l'image" />
</Form.Group>

<Button variant="primary" type="submit">
  Ajouter 
</Button>
</Form>
    </div>

  <div class="tab-pane fade" id="v-pills-commande" role="tabpanel" aria-labelledby="v-pills-commande-tab">
    
<Row  className="justify-content-around  ">
    {commandes.map((el,key)=>(
      <Col md={3} className="justify-self-center">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title> plat : {el.plat}</Card.Title>
    <Card.Text>
      <p> Quantiter : {el.quantiter}</p>
      <p>Prix : {el.prix}</p>
      <p>Etat : {el.etat}</p>
    <p> ID= {el._id}</p>

    </Card.Text>
    <Button variant="primary">Modifier</Button>
    <button class="bttn"><img src="https://img.icons8.com/ios/30/000000/delete--v1.png"/></button>
  </Card.Body>
</Card>
</Col>
 ))}
</Row>
    </div>

    <div class="tab-pane fade " id="v-pills-Ajouteradmin" role="tabpanel" aria-labelledby="v-pills-Ajouteradmin-tab">

    <Form>
<Form.Group className="mb-3" >
  <Form.Label>nom</Form.Label>
  <Form.Control type="text" placeholder=" Entrer Nom" />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Prenom</Form.Label>
  <Form.Control type="text" placeholder="Entrer Prenom" />
</Form.Group>

<Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Entrer Email" />
  </Form.Group>


  <Form.Group className="mb-3" >
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Entrer Path de l'image" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="Entrer le mot de passe" />
  </Form.Group>

<Button variant="primary" type="submit">
  Ajouter 
</Button>
</Form>
    </div>


    <div class="tab-pane fade" id="v-pills-profil" role="tabpanel" aria-labelledby="v-pills-profil-tab">

    <Row  className="justify-content-around  ">
    {admins.map((el,key)=>(
      <Col md={3} className="justify-self-center">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title> {el.nom}-{el.prenom} </Card.Title>
    <Card.Text>
    <p> ID={el._id}</p>
    <p>{el.email}</p>
    </Card.Text>
    <Button variant="primary">Modifier</Button>
   <button class="bttn"><img src="https://img.icons8.com/ios/30/000000/delete--v1.png"/></button>
  </Card.Body>
</Card>
</Col>
 ))}
</Row>


    </div>
  </div>

  </div>
  </div>
  </div>
  
  );
}

export default Dashborad;
