
export const SERVER_BASE_API = "http://localhost:5002/app"

//user

export const GET_USER_API = `${SERVER_BASE_API}/getuser`
export const ADD_USER_API = `${SERVER_BASE_API}/adduser`
export const UPDATE_USER_API = `${SERVER_BASE_API}/:id/update`
export const DELETE_USER_API = `${SERVER_BASE_API}/:id`

// //plat

export const GET_PLAT_API = `${SERVER_BASE_API}/getplat`
// export const ADD_PLAT_API = `${SERVER_BASE_API}/addplat`
// export const UPDATE_PLAT_API = `${SERVER_BASE_API}/:id/update`
// export const DELETE_PLAT_API = `${SERVER_BASE_API}/:id/delete`


// //commande

export const GET_COMMANDE_API = `${SERVER_BASE_API}/getcommande`
// export const ADD_COMMANDE_API = `${SERVER_BASE_API}/addcommande`
// export const UPDATE_COMMANDE_API = `${SERVER_BASE_API}/:id/update`
// export const DELETE_COMMANDE_API = `${SERVER_BASE_API}/:id/delete`

// ///admin

export const GET_ADMIN_API = `${SERVER_BASE_API}/addadmin`
// export const ADD_ADMIN_API = `${SERVER_BASE_API}/getadmin`
// export const UPDATE_ADMIN_API = `${SERVER_BASE_API}/:id/update`
// export const DELETE_ADMIN_API = `${SERVER_BASE_API}/:id/delete`
