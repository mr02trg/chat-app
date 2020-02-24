import React, { Component, Fragment } from 'react'

export default class ChatTile extends Component {
    render() {
        return (
            <Fragment>
                <li className="list-group-item">{this.props.message}</li>
            </Fragment>
        )
    }
}
