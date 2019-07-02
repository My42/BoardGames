const logger = require('../../logger');

class TicTacToe {
  constructor() {
    this.NBR_REQUIRED_PLAYER = 2;
    this.players = [];
  }

  addPlayer(socketId, socket) {
    logger.info('[TicTacToe] add player', { socketId, socket, players: this.players });
    if (this.isCurrentlyPaying()) return;
    this.players.push({ socketId, socket });
    if (this.isCurrentlyPaying()) this.startGame();
  }

  removePlayer(socketId) {
    this.players = this.players.filter(player => player.socketId === socketId);
  }

  startGame() {
    logger.info('[TicTacToe] Start game');
    this.players.forEach(() => {  });
  }

  isCurrentlyPaying() {
    return this.NBR_REQUIRED_PLAYER === this.players.length;
  }
}

module.exports = TicTacToe;
