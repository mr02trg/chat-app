import { createSelector } from 'reselect'
import { find } from 'lodash'

const getRooms = state => state.rooms;

export const getActiveRoom = createSelector(
    [getRooms],
    (rooms) => {
        // console.log('getActiveRoom Reselector');
        return find(rooms, r => r.isActive);
    }
)