import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import {UserReducer} from "./reducer/reducer.js";


const Reducers = combineReducers({

    userstore : UserReducer
  
  
  });
  
  const store = createStore(Reducers,applyMiddleware(thunk));
  export default store






