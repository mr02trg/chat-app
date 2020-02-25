import * as types from '../actions/actionTypes'
import initalState from '../initalState';

export default function roomReducer(state = initalState.rooms, action) {
    switch (action.type) {
        case types.CREATE_ROOM:
            return [...state, action.newRoom]
        default:
            return state;
    }
}