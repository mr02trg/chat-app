import SocketIOClient from 'socket.io-client';

export const RoomSocket = SocketIOClient(process.env.REACT_APP_API_URL + '/rooms');
export const ChatSocket = SocketIOClient(process.env.REACT_APP_API_URL + '/chats')

