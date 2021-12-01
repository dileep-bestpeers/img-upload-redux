import {SIGN_UP, LOG_IN} from "../constants";

export const signUpAction = (data)  => {
    return {
        type: SIGN_UP,
        payload: data
    }
}

export const logInAction = (data) =>{
    return {
        type: LOG_IN,
        payload: data
    }
}

