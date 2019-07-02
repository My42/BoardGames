const logger = require('../../logger');

class TicTacToe {
  constructor() {
    this.NBR_REQUIRED_PLAYER = 2;
    this.players = [];
  }

  addPlayer(socketId, name) {
    this.players.push({ socketId, name });
  }

  removePlayer(socketId) {
    this.players = this.players.filter(player => player.socketId === socketId);
  }

  startGame() {
    logger.info('[TicTacToe] Start game');
  }

  canTheGameStart() {
    return this.NBR_REQUIRED_PLAYER === this.players.length;
  }
}

export default TicTacToe;
