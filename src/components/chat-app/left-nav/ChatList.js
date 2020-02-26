import React, { useEffect } from 'react'
import './ChatList.scss';
import ChatTile from './ChatTile';

import { RoomSocket } from '../../../socket/WebSocket';

import { useDispatch, useSelector } from 'react-redux';
import { createRoom, selectRoom } from '../../../redux/actions/roomActions';
import * as types from '../../../redux/actions/actionTypes';


const ChatList = () => {
    const rooms = useSelector(state => state.rooms);
    const dispatch = useDispatch();

    useEffect(() => {
        RoomSocket.on(types.CREATE_ROOM_SUCCESS, (data) => {
            dispatch(createRoom(data))
        })    
    }, [dispatch]);

    const handleCreateRoom = () => {
        const newRoomId = rooms.length + 1;
        const newRoom = {
            id: newRoomId, 
            name: `Room ${newRoomId}`,
            isActive: false
        };

        // notify other users
        RoomSocket.emit(types.CREATE_ROOM, newRoom);
        
        // dispatch create room action
        dispatch(createRoom(newRoom));
    }

    const handleSelectRoom = (room) => {
        if (room.isActive) {
            return;
        }
        dispatch(selectRoom(room))
    }

    return (
        <div className="chat-list-wrapper">
            <ul className="list-group">
                {rooms.map((x,i) => 
                    <ChatTile 
                        key={i} 
                        room={x} 
                        isNewTile={false}
                        selectRoom={handleSelectRoom}
                    />
                )}
                <ChatTile isNewTile={true} createRoom={handleCreateRoom}  />
            </ul>
        </div>
    )
}

export default ChatList;