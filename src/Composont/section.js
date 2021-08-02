import "react-bootstrap";
import "../App.css";
import img1 from '../image/cov3.jpg'
import img2 from '../image/cov4.jpg'
import img3 from '../image/cov5.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Section () {
  return (
    <div >
        <p class="titre p-2">Un savoir-faire traditionnel tunisien </p>
 <div class="d-flex justify-content-evenly p-2">
      
 <Card >
  <Card.Img variant="top" src={img1} class="img-section" />
  <Card.Body>
    <Card.Title class="trt">Plat Masfouuf</Card.Title>
  </Card.Body>
</Card>

<Card >
  <Card.Img variant="top" src={img2} class="img-section" />
  <Card.Body>
    <Card.Title class="trt">Plat Aigga </Card.Title>
  </Card.Body>
</Card>

<Card >
  <Card.Img variant="top" class="trt" src={img3} class="img-section" />
  <Card.Body>
    <Card.Title class="trt">Plat Rouz</Card.Title>
  </Card.Body>
</Card>     
        </div>
        <Button variant="outline-dark more" size="lg">Voir plus</Button>{' '}
    
        
    </div>
  );
}

export default Section;
