const user =  {
    datas : []

  }

export  const UserReducer = (state = user, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case   "GET_USER_SUCCEDED":
            return {
                ...state,
                datas: payload,
              
              };
            case  "ADD_USER_API":
                return{
                    ...state,
                    datas:[ ...state.datas, payload]
                }
                case "DELETE_USER_API":
                return {
                  ...state,
                  datas: state.datas.filter(
                    data => data._id !== payload
                  )
                  };
}
console.log('inchallah labes si ali', state)
return state
};

//plat

const plat =[];

export  const PlatReducer = (state = plat, action ) => {
    switch(action.type) {
        case "GET_PLAT_SUCCEDED":
            return action.payload
                break

    }
return state
};

//commandes

const commande =[];

export  const CommandeReducer = (state = commande, action ) => {
    switch(action.type) {
        case "GET_COMMANDE_SUCCEDED":
            return action.payload
                break

    }
return state
};

//Admin

const admin =[];

export  const AdminReducer = (state = admin, action ) => {
    switch(action.type) {
        case "GET_COMMANDE_SUCCEDED":
            return action.payload
                break

    }
return state
};