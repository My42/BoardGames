const logger = require('../../logger');

class TicTacToe {
  constructor() {
    this.NBR_REQUIRED_PLAYER = 2;
    this.players = [];
  }

  addPlayer(socketId, name) {
    logger.info('[TicTacToe] add player', { socketId, name, players: this.players });
    if (this.isCurrentlyPaying()) return;
    this.players.push({ socketId, name });
    if (this.isCurrentlyPaying()) this.startGame();
  }

  removePlayer(socketId) {
    this.players = this.players.filter(player => player.socketId === socketId);
  }

  startGame() {
    logger.info('[TicTacToe] Start game');
  }

  isCurrentlyPaying() {
    return this.NBR_REQUIRED_PLAYER === this.players.length;
  }
}

module.exports = TicTacToe;
