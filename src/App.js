import React from 'react';
import './App.scss';

import ChatList from './components/left-nav/ChatList';
import Chat from './components/right-nav/Chat';

function App() {
  return (
    <div className="d-flex w-100 p-3">
      <ChatList />
      <Chat />
    </div>
  );
}

export default App;
