const { addPlayer } = require('../matchmaking');

const sockets = (io, socket) => {
  socket.on('mm_join', gameId => addPlayer(io, socket.id, gameId));
};

module.exports = sockets;
