import Axios from "axios"
import { GET_USER_API} from "./shared/apiUrls"
import {GET_PLAT_API} from "./shared/apiUrls"
import {GET_COMMANDE_API} from "./shared/apiUrls"
import {GET_ADMIN_API} from "./shared/apiUrls"
import {ADD_USER_API} from "./shared/apiUrls"
import {DELETE_USER_API} from "./shared/apiUrls"
import {UPDATE_USER_API} from "./shared/apiUrls"



//user
export const fetchUser=()=>
Axios.get(GET_USER_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)


  export const fetchAddUser = (nom,prenom,email,adress,motpass,image) =>
  Axios.post(ADD_USER_API,{nom,prenom,email,adress,motpass,image}).then(res=>res.data)


//

export const deleteUser=(id)=> {
  Axios.delete(`http://localhost:5002/app/${id}`).then(res=>res.data)
}

//


//

export const updUser=(id,nom,prenom,email,adress,image)=> {
  Axios.put(`http://localhost:5002/app/${id}/update`,{nom,prenom,email,adress,image} ).then(res=>res.data).then(res=> window.location.reload());
}









//   export const DeleteUser=(id)=>
// Axios.delete(`${DELETE_USER_API} /${id}`,{  Accept: 'application/json',
// 'Content-Type': 'application/json',
//   }).then(res=>res.data)


// export const addUser=()=>
// Axios.post(ADD_USER_API,{
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }).then(res=>res.data)



  //plats

  export const fetchPlat=()=>
  Axios.get(GET_PLAT_API,{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then(res=>res.data)
  

    //commandes

    export const fetchCommande=()=>
    Axios.get(GET_COMMANDE_API,{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }).then(res=>res.data)

      //Admin

      export const fetchAdmin=()=>
      Axios.get(GET_ADMIN_API,{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }).then(res=>res.data)