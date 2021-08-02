import "react-bootstrap";
import "../App.css";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


function Footer () {
  return (

<div class="footer"> 
<div class="d-flex justify-content-evenly">
    <div class="col-md-8">
<h2 class="ftt">Abonnez-vous à notre newsletter</h2>

<InputGroup>
    <FormControl
      placeholder="Entrer ton adresse"
      aria-label="Recipient's username with two button addons" class="input"/>
        <Button variant="outline-secondary">Abonneé</Button>
  
  </InputGroup>
  </div>
    </div>
    <div class="d-flex justify-content-evenly p-5 lien" >
        <p>Mentions légales</p>
        <p>Politique en matière de cookies </p>
        <p>Politique en matière de cookies </p>
        <p>Politique de confidentialité</p>
        <p>Conditions d'utilisation</p>
    </div>
  
    <p class="cpy">©2021 par Ali</p>
    </div>
  );
}

export default Footer;



