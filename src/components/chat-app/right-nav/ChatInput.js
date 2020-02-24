import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './ChatInput.scss'

import * as chatActions from '../../../redux/actions/chatActions';

const ChatInput = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(chatActions.createMessage(message));
        setMessage('');
    }

    return (
        <form className="form-inline pt-4" onSubmit={handleSubmit}>
            <input type="text"
                className="form-control flex-grow-1 mr-4"
                value={message}
                onChange={(event) => setMessage(event.target.value)} />
                
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    )
}

export default ChatInput;
