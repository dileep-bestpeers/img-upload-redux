// import { uuid } from "uuidv4";

const initialState = {users:[]}
const LOG_IN = ( state = initialState, action ) =>{
    const data = action.payload;
    switch( action.type ){
        case 'LOG_IN' : return {...state.users, data}
        default : return state
    }
}

export default LOG_IN