import React from 'react'
import './ChatContainer.scss';

import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';

const ChatContainer = () => {

    return (
        <div className="chat-wrapper">
            <ChatDisplay />
            <ChatInput />
        </div>
    )
}

export default ChatContainer;
