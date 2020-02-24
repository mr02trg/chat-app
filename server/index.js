const app = require('./app');
const server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.emit('from-server', { hello: 'world' });
    socket.on('from-client', (data) => console.log('data'))
});

const port = process.env.port || 3000;
server.listen(port, () => console.log(`server started on ${port}`));