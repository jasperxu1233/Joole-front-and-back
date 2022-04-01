import {applyMiddleware, createStore} from "redux";
import auth from "../reducers/auth";
import thunk from "redux-thunk";


const store = createStore(auth, applyMiddleware(thunk))

export default store;