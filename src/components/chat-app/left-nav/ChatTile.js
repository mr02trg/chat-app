import React from 'react'
import './ChatTile.scss'

const ChatTile = (props) => {
    const createRoom = () => {
        props.createRoom();
    }
    
    const selectRoom = () => {
        props.selectRoom(props.room);
    }

    return (
        props.isNewTile ?
        (
            <li className="list-group-item d-flex justify-content-end">
                <button className="btn btn-primary" onClick={createRoom}>New Room</button>
            </li>
        ) 
        :
        (
            <li className={`list-group-item select-room ${props.room.isActive ? 'active' : ''} `} 
                onClick={selectRoom}>{props.room.name}
            </li>
        )
    )
}

export default ChatTile;
