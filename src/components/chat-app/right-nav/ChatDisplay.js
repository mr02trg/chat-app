import React from 'react'
import ChatMessage from './ChatMessage'
import './ChatDisplay.scss'

const ChatDisplay = (props) => {
    return (
        <div className="chat-display">
            {props.messages.map((x, i ) => <ChatMessage key={i} message={x} />)}
        </div>
    )
}

export default ChatDisplay;
