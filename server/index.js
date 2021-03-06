const app = require('./app');
const server = require('http').createServer(app);
var io = require('socket.io')(server);

const establishRoomConnection = require('./socket/roomSocket');
const establishChatConnection = require('./socket/chatSocket');

establishRoomConnection(io);
establishChatConnection(io);

const port = process.env.port || 4000;
server.listen(port, () => console.log(`server started on ${port}`));