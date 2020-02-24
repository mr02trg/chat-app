import React, { Component } from 'react'
import './Chat.scss';

import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';

export default class Chat extends Component {
    render() {
        return (
            <div className="chat-wrapper">
                <ChatDisplay />
                <ChatInput />
            </div>
        )
    }
}
