import { createSelector } from 'reselect';
import * as activeRoomSelector from './GetActiveRoom';
import { filter } from 'lodash'

const getMessages = state => state.messages;
const getActiveRoom = state => activeRoomSelector.getActiveRoom(state);

export const getRoomMessages = createSelector(
    [getMessages, getActiveRoom],
    (messages, activeRoom) => {
        let roomMessage = [];
        if (activeRoom) {
            roomMessage = filter(messages, m => m.roomId === activeRoom.id);
        }
        return roomMessage;
    }
);
