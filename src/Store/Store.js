
import {   createStore, applyMiddleware ,compose} from "redux";


import { thunk } from "redux-thunk";

import authReducer from "../Reducer/combineReducer"


const persidendState =localStorage.getItem('reduxStore')? JSON.parse(localStorage.getItem('reduxStore')):{};

const enhancer= compose( applyMiddleware(thunk));

const Store = createStore(

    authReducer , persidendState,  enhancer
)


export default Store;