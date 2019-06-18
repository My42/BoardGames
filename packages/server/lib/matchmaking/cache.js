const LRU = require("lru-cache");
const options = {
  max: 500,
  length: function (n, key) { return n * 2 + key.length },
  maxAge: 1000 * 60 * 60
};

const cache = new LRU(options);

module.exports = cache;