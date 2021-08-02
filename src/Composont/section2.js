import "react-bootstrap";
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../image/cov1.jpg'
import img2 from '../image/cov6.jpg'
import img3 from '../image/cov7.jpg'

function Section1() {
  return (      
<div>
<p class="titre p-2">Nos Evenements  </p>

      <div class="d-flex justify-content-evenly">
    <div class="col-md-9 p-2">
  
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Journee de Fête du Travail </h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Journee de Fête de la République</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Journee de Fête de la Femme 	</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
    </div>
  );
}

export default Section1;



