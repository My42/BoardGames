const logger = require('../logger');
const cache = require('./cache');

module.exports = (socket) => {
  logger.info('User left matchmaking', { socketId: socket.id });

  const cacheKey = `socketId-${socket.id}`;
  const gameId = cache.get(cacheKey);
  cache.del(cacheKey);

  const socketIds = cache.get(gameId);
  cache.set(gameId, socketIds.filter(id => id !== socket.id));
};
