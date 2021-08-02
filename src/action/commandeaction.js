import {fetchCommande} from '../requist'
export function getcommande() {
    return dispatch => {
        fetchCommande()
        .then (commandes =>dispatch (
            {type: "GET_COMMANDE_SUCCEDED",payload: commandes})
        )

        .catch(err=>dispatch( {
            type: "GET_USER_FAILED",
            payload: err
          }))
    }

}