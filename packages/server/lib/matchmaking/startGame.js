const logger = require('../logger');

module.exports = (io, socketIds) => {
  const namespace = `/${socketIds.join('')}`;
  logger.info('New namespace created: %s', namespace);
  const nsp = io.of(namespace);
  nsp.on('connection', (socket) => {
    logger.info(`someone connected on ${socketIds.join('')} namespace`);
    socket.on('disconnect', () => {
      logger.info(`someone disconnected on ${socketIds.join('')} namespace`);
      nsp.emit('game_player_left', socket.id);
    });
  });
  socketIds.forEach((id) => {
    io.to(id).emit('mm_matched', namespace);
  });
};
