import React, { useState } from 'react'
import './ChatInput.scss'

const ChatInput = (props) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(message);
        setMessage('');
    }

    return (
        <form className="form-inline chat-input" onSubmit={handleSubmit}>
            <input type="text"
                className="form-control flex-grow-1 mr-4"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)} />
                
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    )
}

export default ChatInput;
