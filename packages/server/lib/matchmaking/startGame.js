const logger = require('../logger');
const TicTacToe = require('../games/ticTacToe');

module.exports = (io, socketIds) => {
  const namespace = `/${socketIds.join('')}`;
  logger.info('New namespace created: %s', namespace);
  const nsp = io.of(namespace);
  nsp.on('connection', (socket) => {
    logger.info(`someone connected on ${socketIds.join('')} namespace`);
    socket.emit('game_join_succeeded');
    socket.on('disconnect', () => {
      logger.info(`someone disconnected on ${socketIds.join('')} namespace`);
      nsp.emit('game_canceled');
    });
  });
  socketIds.forEach((id) => {
    io.to(id).emit('mm_matched', namespace);
  });
};
