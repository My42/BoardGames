const logger =  require('../logger');
const { addPlayer } = require('../matchmaking');

const sockets = (io, socket) => {
  logger.info('User connected');

  socket.on('mm_join', (gameId) => addPlayer(io, socket.id, gameId));
};

module.exports = sockets;
