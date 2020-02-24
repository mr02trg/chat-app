import * as types from '../actions/actionTypes'
import initalState from '../initalState';

export default function chatReducer(state = initalState.messages, action) {
    switch (action.type) {
        case types.CREATE_MESSAGE:
            return [...state, action.message]
        default:
            return state;
    }
}