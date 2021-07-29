import Axios from "axios"

import {
    GET_USER_API,
  
} from "./shared/apiUrls"

export const fetchUser=()=>
Axios.get(GET_USER_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)
