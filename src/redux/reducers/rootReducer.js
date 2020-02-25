import { combineReducers } from "redux";
import messages from './chatReducers'
import rooms from './roomReducers'

const rootReducer = combineReducers({
    messages,
    rooms
});

export default rootReducer;