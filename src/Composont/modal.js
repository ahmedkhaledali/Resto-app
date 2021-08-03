import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateUser} from "../action/actions"
import {useDispatch} from 'react-redux'

const Updteuser = ({el,id}) => {
    const [update,setUpdate]=useState({nom:el.nom,prenom:el.prenom,email:el.email,adress:el.adress,image:el.image})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    
    
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUpdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Menu

    const uptuser=()=>{
        dispatch (updateUser(id,update.nom, update.prenom,update.email ,update.adress,update.image)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
    <button  onClick={handleShow} ><i class="far fa-edit"></i> </button>


<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Modifier Produit</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Nom</Form.Label>
<Form.Control type="text" placeholder="nom" name='nom' defaultValue={el.nom}  onChange={handleChange}/>

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Prenom</Form.Label>
<Form.Control type="text" placeholder="prenom"  name='prenom' defaultValue={el.prenom}  onChange={handleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Email</Form.Label>
<Form.Control type="text" placeholder="Email"  name='Email'  defaultValue={el.Email}   onChange={handleChange} />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Adress</Form.Label>
<Form.Control type="text" placeholder="adress"  name="adress"  defaultValue={el.adress}  onChange={handleChange} />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Image</Form.Label>
<Form.Control type="text" placeholder="Image"  name="image"  defaultValue={el.image}  onChange={handleChange} />
</Form.Group>

<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={uptuser} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default Updteuser