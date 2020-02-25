import React from 'react'
import './ChatDisplay.scss'

const ChatDisplay = (props) => {

    return (
        <div className="chat-display">
            {props.messages.map((x, i ) => <li key={i}>{x.content}</li>)}
        </div>
    )
}

export default ChatDisplay;
