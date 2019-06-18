const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./lib/sockets');
const logger = require('./lib/logger');

io.on('connection', (socket) => sockets(io, socket));

http.listen(4242, function(socket ){
  logger.info('listening on *:%d', 4242);
});
