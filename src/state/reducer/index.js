import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import accountReducer from './accountReducer'

const reducers = combineReducers({amount : bankReducer , amount1 : accountReducer});
export default reducers; 