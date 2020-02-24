import React from 'react'
import { useSelector } from 'react-redux';
import './ChatDisplay.scss'

const ChatDisplay = () => {
    const messages = useSelector(state => state.messages);

    return (
        <div className="chat-display">
            {messages.map((x, i ) => <li key={i}>{x}</li>)}
        </div>
    )
}

export default ChatDisplay;
