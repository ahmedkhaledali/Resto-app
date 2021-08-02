import "react-bootstrap";
import "../App.css";
import prp from '../image/prp1.jpeg'


function Propos () {
  return (
    <div >
<div class="d-flex justify-content-evenly p-2">
<div class="col-md-4">

<p class="prp-txt"><h1>A propos</h1> Le FTOURNA restaurant gastronomique de cuisine traditionnelle,
     situé juste en face de l'hôtel, est classé parmi les meilleurs restaurants de Tunisie.
      Fermé le dimanche.

Le ROOFTOP bar et restaurant surplombant les toits de la médina, 
ouvert toute la journée et tard dans la nuit,
 propose une large gamme de plats et de vins tunisiens et internationaux.</p>
 </div>
 <img src={prp} alt="" class="prp" />
</div>
    </div>
  );
}

export default Propos;
