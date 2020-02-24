import React, { Component } from 'react'
import './ChatContainer.scss';

import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';

export default class ChatContainer extends Component {
    render() {
        return (
            <div className="chat-wrapper">
                <ChatDisplay />
                <ChatInput />
            </div>
        )
    }
}
