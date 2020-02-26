
const establishChatConnection = (io) => {
    return io.of('/chats')
            .on('connection', (socket) => {
                socket.on('CREATE_MESSAGE', (data) => {
                    console.log(data);
                    socket.broadcast.emit('CREATE_MESSAGE_SUCCESS', data);
                })
            });
}

module.exports = establishChatConnection;