import React from 'react'

const ChatTile = (props) => {
    const createRoom = () => {
        props.createRoom();
    }

    return (
        props.isNewTile ?
        (
            <li className="list-group-item d-flex justify-content-end">
                <button className="btn btn-primary" onClick={createRoom}>Start New Chat ....</button>
            </li>
        ) 
        :
        (
            <li className="list-group-item">{props.message}</li>
        )
    )
}

export default ChatTile;
