
import axios from "axios";
import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from '../action/actions'

const Dashborad = () => {

  const users = useSelector(state=>state.userstore)
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getuser());
   },[]);
   console.log(users, "did we ?");



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
const [plat,setPlat]=useState([]);
const getplat = () =>{
  axios
  .get("/app/getplat")
  .then((res)=>{
     console.log("run",res.data);
    var y=res.data;
    setPlat(y);
  })
  .catch ((error => console.error(error)));
};
useEffect(()=>{
getplat();
},[]);





  return (
    <div class="container">

<div class="d-flex align-items-start">

  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-user-tab" data-bs-toggle="pill" data-bs-target="#v-pills-user" type="button" role="tab" aria-controls="v-pills-user" aria-selected="true">Users</button>
    <button class="nav-link" id="v-pills-plat-tab" data-bs-toggle="pill" data-bs-target="#v-pills-plat" type="button" role="tab" aria-controls="v-pills-plat" aria-selected="false">Plats</button>
    <button class="nav-link" id="v-pills-commande-tab" data-bs-toggle="pill" data-bs-target="#v-pills-commande" type="button" role="tab" aria-controls="v-pills-commande" aria-selected="false">Commandes</button>
    <button class="nav-link" id="v-pills-profil-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profil" type="button" role="tab" aria-controls="v-pills-profil" aria-selected="false">Mon Profil</button>
  </div>

  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-user" role="tabpanel" aria-labelledby="v-pills-user-tab">
    {users.map((el,key)=>(
      <div class="row" key={key}>
<div class="card-body ">
<h5 class="card-title">{el.nom}-{el.prenom}</h5>
<p class="card-text">{el.adress}-{el.email}</p>
<p>{el._id}</p>
</div>
   </div>  
      ))}
    </div>
  



    <div class="tab-pane fade" id="v-pills-plat" role="tabpanel" aria-labelledby="v-pills-plat-tab">
    {plat.map(el=>(
<div>
  <h1>{el.entres}</h1>
  <h1>{el.platsprincipaux}</h1>
  <h1>{el.desserts}</h1>
  <h1>{el.sauces}</h1>
  </div>
     ))}
    
    
    
    </div>
    <div class="tab-pane fade" id="v-pills-commande" role="tabpanel" aria-labelledby="v-pills-commande-tab">...</div>
    <div class="tab-pane fade" id="v-pills-profil" role="tabpanel" aria-labelledby="v-pills-profil-tab">...</div>
  </div>

  </div>
</div>

  
  );
}

export default Dashborad;
