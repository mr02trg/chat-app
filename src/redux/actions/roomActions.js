import * as types from './actionTypes'

export function createRoom(newRoom) {
    return {type: types.CREATE_ROOM, newRoom};
}