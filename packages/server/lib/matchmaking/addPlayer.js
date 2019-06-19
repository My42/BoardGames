const cache = require('./cache');
const logger = require('../logger');
const lookForMatch = require('./lookForMatch');
const startGame = require('./startGame');

module.exports = (io, socketId, gameId) => {
  logger.info('User join matchmaking', { gameId, socketId });
  const socketIds = cache.get(gameId) || [];
  cache.set(gameId, [...socketIds, socketId]);
  cache.set(`socketId-${socketId}`, gameId); // To be able to find easier the current gameId of the player if he disconnect
  const socketIdMatch = lookForMatch(gameId, socketId);
  if (socketIdMatch !== null) startGame(io, [socketId, socketIdMatch]);
};
