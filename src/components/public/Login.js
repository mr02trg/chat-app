import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './Login.scss'

const Login = (props) => {
    const [name, setName] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        props.history.push('/chat');
    }

    return (
        <div className="card">
            <div className="card-header">
                Welcome
            </div>
            <div className="card-body">
                <h5 className="card-title">Wanna drop in and talk to a random stranger?</h5>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Go</button>
            </div>
        </div>
    )
}

export default withRouter(Login);
