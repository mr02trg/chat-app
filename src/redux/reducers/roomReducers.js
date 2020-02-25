import * as types from '../actions/actionTypes'
import initalState from '../initalState';

export default function roomReducer(state = initalState.rooms, action) {
    switch (action.type) {
        case types.CREATE_ROOM:
            return [...state, action.newRoom]
        case types.SELECT_ROOM:
            const newState = state.map(x => {
                x.isActive = false;
                return x;
            });
            const activeRoomIndex = newState.findIndex(x => x.id === action.room.id);
            newState[activeRoomIndex].isActive = true;
            return newState;
        default:
            return state;
    }
}