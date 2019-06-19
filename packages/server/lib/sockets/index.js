const { addPlayer, removePlayer } = require('../matchmaking');

const sockets = (io, socket) => {
  socket.on('mm_join', gameId => addPlayer(io, socket.id, gameId));
  socket.on('disconnect', () => removePlayer(socket));
};

module.exports = sockets;
