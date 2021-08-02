import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import {UserReducer } from "./reducer/reducer.js";
import {PlatReducer} from "./reducer/reducer.js";
import {CommandeReducer} from "./reducer/reducer.js";
import {AdminReducer} from "./reducer/reducer.js";

const Reducers = combineReducers({

    userstore : UserReducer ,
    platstore : PlatReducer,
  commandestore :CommandeReducer,
  adminstore :AdminReducer,
  // duserstore : UserReducer
  });
  
  const store = createStore(Reducers,applyMiddleware(thunk));
  export default store


