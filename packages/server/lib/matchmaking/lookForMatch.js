const { isEmpty } = require('lodash');
const cache = require('./cache');

module.exports = (gameId, currentSocketId) => {
  const socketIds = (cache.get(gameId) || []).filter(id => id !== currentSocketId);
  if (isEmpty(socketIds)) return null;
  const [socketId, ...rest] = socketIds.filter(id => id !== currentSocketId);
  cache.set(gameId, rest);
  return socketId || null;
};
