import React from 'react'

import ChatList from './left-nav/ChatList'
import ChatContainer from './right-nav/ChatContainer'

const ChatApp = () => {
    return (
        <div>
            <div className="d-flex w-100">
                <ChatList />
                <ChatContainer />
            </div>
        </div>
    )
}

export default ChatApp;
