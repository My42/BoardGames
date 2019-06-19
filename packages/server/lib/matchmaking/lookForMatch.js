/* eslint-disable max-len */
const { isEmpty } = require('lodash');
const cache = require('./cache');
const removePlayer = require('./removePlayer');

module.exports = (gameId, currentSocketId) => {
  const socketIds = (cache.get(gameId) || []).filter(id => id !== currentSocketId);
  if (isEmpty(socketIds)) return null;
  const [socketId] = socketIds.filter(id => id !== currentSocketId);
  removePlayer(currentSocketId); // TODO: There will be a problem if one day there is one game with more than 2 people !!
  removePlayer(socketId); // TODO: There will be a problem if one day there is one game with more than 2 people !!
  return socketId;
};
