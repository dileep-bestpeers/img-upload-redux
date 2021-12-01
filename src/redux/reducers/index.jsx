import USERS from '../reducers/AllReducers'
import { combineReducers } from "redux";

const rootreducer=combineReducers({
    USERS,
})
export default rootreducer