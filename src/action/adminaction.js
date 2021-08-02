import {fetchAdmin} from '../requist'
export function getadmin() {
    return dispatch => {
        fetchAdmin()
        .then (admin =>dispatch (
            {type: "GET_USER_SUCCEDED",payload: admin})
        )

        .catch(err=>dispatch( {
            type: "GET_USER_FAILED",
            payload: err
          }))
    }

}