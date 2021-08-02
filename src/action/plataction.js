import {fetchPlat} from '../requist'
export function getplat() {
    return dispatch => {
        fetchPlat()
        .then (plats =>dispatch (
            {type: "GET_PLAT_SUCCEDED",payload: plats})
        )

        .catch(err=>dispatch( {
            type: "GET_USER_FAILED",
            payload: err
          }))
    }

}