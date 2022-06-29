import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { changeModeReducers } from "./reducers/darkModeReducers";
import { userGetReducer } from "./reducers/userReducers";

const reducers = combineReducers({
    productInfo:userGetReducer,
    colorInfo:changeModeReducers
});
const colorLS=localStorage.getItem("theme")?localStorage.getItem("theme"):"black"

const initialState={
    productInfo:{
        product:{}
    },
    colorInfo:{
        color:colorLS
    }
}

//middleware

//async THUNK

const middleware=[thunk]




const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;