import React from 'react';
import './App.scss';

import ChatApp from './components/chat-app/ChatApp';
import Login from './components/public/Login';

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/chat">
          <ChatApp />
        </Route>
        <Route path="/">
          <Login />
        </Route>
    </Switch>
    </div>
    
  );
}

export default App;
