import { combineReducers } from "redux";
import messages from './chatReducers'

const rootReducer = combineReducers({
    messages
});

export default rootReducer;