
const establishRoomConnection = (io) => {
    return io.of('/rooms')
            .on('connection', (socket) => {
                socket.on('CREATE_ROOM', (data) => {
                    console.log(data);
                    socket.broadcast.emit('CREATE_ROOM_SUCCESS', data);
                })
            });
}

module.exports = establishRoomConnection;