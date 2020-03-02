import React, { useEffect, useRef } from 'react'
import './ChatContainer.scss';

import { useSelector, useDispatch } from 'react-redux';

import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';

import { ChatSocket, RoomSocket } from '../../../socket/WebSocket';

import * as types from '../../../redux/actions/actionTypes';
import * as AppConstant from '../../../AppConstant';

import * as chatActions from '../../../redux/actions/chatActions';
import { getActiveRoom } from '../../../redux/selectors/GetActiveRoom';
import { getRoomMessages } from '../../../redux/selectors/GetRoomMessages';

const ChatContainer = () => {

    const messages = useSelector(state => getRoomMessages(state));
    const activeRoom = useSelector(state => getActiveRoom(state));
    const dispatch = useDispatch();

    // we need to keep the ref to the current active room id 
    // since useEffect belongs to a 'rendering' 
    // thus in the case below, active room will always be undefined since useEffect run at 'willbemounted' lifecycle hooks
    const activeRoomRef = useRef(activeRoom);
    activeRoomRef.current = activeRoom;

    useEffect(() => {
        ChatSocket.on(types.CREATE_MESSAGE_SUCCESS, (newMessage) => {
            dispatch(chatActions.createMessage(newMessage));
        })  
        
        RoomSocket.on(types.SELECT_ROOM_SUCCESS, (data) => {
            const sysMessage = handeSelectRoomSuccess(data);
            
            if (sysMessage) {
                dispatch(chatActions.createMessage(sysMessage))
            }
        })
    // eslint-disable-next-line
    }, []);

    // update chat history on room change
    useEffect(() => {
        dispatch(chatActions.loadMessages(activeRoom));
    }, [activeRoom, dispatch])

    const handeSelectRoomSuccess = (data) => {
        let sysMessage = undefined;
        if (activeRoomRef.current && data) {
            const currActiveRoomId = activeRoomRef.current.id;
            switch(currActiveRoomId) {
                case data.leftRoomId:
                    sysMessage = {
                        author: AppConstant.ADMIN,
                        content: `*** ${data.author} has left room. What have you done? ***`,
                        created: Date.now(),
                        roomId: currActiveRoomId
                    }
                    break
                case data.enterRoomId:
                    sysMessage = {
                        author: AppConstant.ADMIN,
                        content: `*** ${data.author} has enter room ***`,
                        created: Date.now(),
                        roomId: currActiveRoomId
                    }
                    break
                default:
                    break
            }
        }
        return sysMessage;
    }

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
