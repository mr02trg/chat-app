import React from 'react'
import './ChatList.scss';
import ChatTile from './ChatTile';

import RoomSocket from '../../../socket/RoomSocket';

import { useDispatch, useSelector } from 'react-redux';
import { createRoom } from '../../../redux/actions/roomActions';
import * as types from '../../../redux/actions/actionTypes';


const ChatList = () => {
    console.log(RoomSocket);

    RoomSocket.on(types.CREATE_ROOM_SUCCESS, (data) => {
        dispatch(createRoom(data))
    });

    const rooms = useSelector(state => state.rooms);
    const dispatch = useDispatch();

    const handleCreateRoom = () => {
        const newRoomId = rooms.length + 1;
        const newRoom = {id: newRoomId, name: `Room ${newRoomId}`};

        RoomSocket.emit(types.CREATE_ROOM, newRoom);
        
        dispatch(createRoom(newRoom));
    }

    return (
        <div className="chat-list-wrapper">
            <ul className="list-group">
                {rooms.map((x,i) => <ChatTile key={i} message={x.name} isNewTile={false} />)}
                <ChatTile isNewTile={true} createRoom={handleCreateRoom} />
            </ul>
        </div>
    )
}

export default ChatList;