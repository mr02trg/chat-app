import * as types from './actionTypes'

export function createRoom(newRoom) {
    return {type: types.CREATE_ROOM, newRoom};
}

export function selectRoom(room) {
    return {type: types.SELECT_ROOM, room};
}