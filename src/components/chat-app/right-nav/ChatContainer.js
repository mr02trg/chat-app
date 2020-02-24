import React, { useEffect } from 'react'
import './ChatContainer.scss';

import socketIOClient from 'socket.io-client';

import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';

const ChatContainer = () => {

    useEffect(() => {
        // TODO establish socketio connection
        return () => {
            // cleanup
        };
    }, [])

    return (
        <div className="chat-wrapper">
            <ChatDisplay />
            <ChatInput />
        </div>
    )
}

export default ChatContainer;
