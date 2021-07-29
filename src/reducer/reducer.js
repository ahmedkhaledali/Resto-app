const user =[];

export  const UserReducer = (state = user, action ) => {
    switch(action.type) {
        case "GET_USER_SUCCEDED":
            return action.payload
                break

    }
return state
};



