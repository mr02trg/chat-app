import React from 'react'
import './ChatContainer.scss';

import { useSelector, useDispatch } from 'react-redux';

import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';

import * as chatActions from '../../../redux/actions/chatActions';

const ChatContainer = () => {

    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const handleSubmit = (message) => {
        const newMessage = {
            author: sessionStorage.getItem('username'),
            content: message,
            created: Date.now(),
            // TODO: roomID
        };
        dispatch(chatActions.createMessage(newMessage));
    }

    return (
        <div className="chat-wrapper">
            <ChatDisplay messages={messages} />
            <ChatInput onSubmit={handleSubmit} />
        </div>
    )
}

export default ChatContainer;
