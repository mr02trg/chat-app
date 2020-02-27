import React from 'react'
import './ChatMessage.scss'

const ChatMessage = (props) => {
    const isAuthor = (props.message.author === sessionStorage.getItem('username'))
    return (
        isAuthor ? 
        (
            
            <div className="chat-message-wrapper right">
                <div className="chat-message">
                    {props.message.content}
                </div>
                {/* <div className="chat-avatar">You</div> */}
            </div>
        )
        :
        (
            <div className="chat-message-wrapper">
                {/* <div className="chat-avatar">{props.message.author}</div> */}
                <div className="chat-message">
                    {props.message.content}
                </div>
            </div>
        )
    )
}

export default ChatMessage;
