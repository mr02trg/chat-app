import * as types from './actionTypes'

export function createMessage(message) {
    return {type: types.CREATE_MESSAGE, message};
}