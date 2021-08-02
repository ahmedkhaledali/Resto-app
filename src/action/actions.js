import {fetchUser} from '../requist'
import {fetchAddUser} from '../requist'
import{deleteUser} from '../requist'
import axios from "axios";

export function getuser() {
    return dispatch => {
        fetchUser()
        .then (users =>dispatch (
            {type: "GET_USER_SUCCEDED",payload: users})
        )

        .catch(err=>dispatch( {
            type: "GET_USER_FAILED",
            payload: err
          }))
    }

}




//add

export const addUser=(nom,prenom,email,adress,motpass,image)=> async (dispatch) =>{
    try{
        const res=await fetchAddUser (nom,prenom,email,adress,motpass,image);
        dispatch ({
            type:"ADD_USER_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}


//delete


export const deleteuser = (id)=> async (dispatch) => {
    try {
      await deleteUser (id);
      dispatch({
        type:"DELETE_USER_API",
        payload:id
    })
      console.log("delete")
      dispatch(getuser);
    } catch (error) {
      console.log(error);
    }
  };


// 
// update Menu
  export const updateItem = (id,nom,prenom,email,adress,motpass,image) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:4000/app/${id}/update`,{nom,prenom,email,adress,motpass,image}) 
       
      dispatch({
        type:  "REACT_APP_UPDATE_PRODUIT", 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };