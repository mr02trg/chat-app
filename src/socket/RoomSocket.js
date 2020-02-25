import SocketIOClient from 'socket.io-client';

const BASE_URL = process.env.REACT_APP_API_URL + '/rooms';
const RoomSocket = SocketIOClient(BASE_URL);

export default RoomSocket;
