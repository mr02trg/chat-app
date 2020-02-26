import React, { useEffect } from 'react'
import './ChatContainer.scss';

import { useSelector, useDispatch } from 'react-redux';

import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';

import { RoomSocket, ChatSocket } from '../../../socket/WebSocket';

import * as types from '../../../redux/actions/actionTypes';

import * as chatActions from '../../../redux/actions/chatActions';
import { getActiveRoom } from '../../../redux/selectors/GetActiveRoom';
import { getRoomMessages } from '../../../redux/selectors/GetRoomMessages';

const ChatContainer = () => {

    const messages = useSelector(state => getRoomMessages(state));
    const activeRoom = useSelector(state => getActiveRoom(state));
    const dispatch = useDispatch();

    useEffect(() => {
        ChatSocket.on(types.CREATE_MESSAGE_SUCCESS, (newMessage) => {
            dispatch(chatActions.createMessage(newMessage));
        })    
    }, [dispatch]);

    // update chat history on room change
    useEffect(() => {
        dispatch(chatActions.loadMessages(activeRoom));
    }, [activeRoom, dispatch])


    const handleSubmit = (message) => {
        const newMessage = {
            author: sessionStorage.getItem('username'),
            content: message,
            created: Date.now(),
            roomId: activeRoom.id
        };

        ChatSocket.emit(types.CREATE_MESSAGE, newMessage);

        dispatch(chatActions.createMessage(newMessage));
    }

    return (
        activeRoom ? 
        (
            <div className="chat-wrapper">
                <ChatDisplay messages={messages} />
                <ChatInput onSubmit={handleSubmit} />
            </div>
        ) :
        (
            <div className="d-flex justify-content-around align-items-center w-100">
                <h1>Choose a room</h1>
            </div>
        )     
    )
}

export default ChatContainer;
