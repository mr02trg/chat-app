import * as types from './actionTypes'

export function loadMessages(room) {
    return {type: types.LOAD_MESSAGE, room}
}

export function createMessage(message) {
    return {type: types.CREATE_MESSAGE, message};
}