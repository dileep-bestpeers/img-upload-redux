
// import { uuid } from "uuidv4";
import {SIGN_UP, LOG_IN} from "../constants";

const initialState = JSON.parse(localStorage.getItem("SOCIAL")) 
if ( !initialState)  initialState = {}
const USERS = ( state = initialState, action ) =>{
    switch( action.type ){
        case SIGN_UP : return {...state.usersignup, data:action.payload }
        default : return state
    }
}

export default USERS