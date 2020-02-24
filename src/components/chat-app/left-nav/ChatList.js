import React, { Component } from 'react'
import './ChatList.scss';
import ChatTile from './ChatTile';

export default class ChatList extends Component {
    render() {
        const data = [
            {message: 'Cras justo odio'},
            {message: 'Dapibus ac facilisis in'},
            {message: 'Morbi leo risus'},
            {message: 'Porta ac consectetur ac'},
            {message: 'Vestibulum at eros'},
        ];

        return (
            <ul className="list-group">
                {data.map((x,i) => <ChatTile key={i} message={x.message} />)}
            </ul>
        )
    }
}
