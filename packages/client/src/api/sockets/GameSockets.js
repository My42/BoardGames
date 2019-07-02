import Socket from './Sockets';
import server from '../../const/server';

class GameSockets extends Socket {
  connect(lobbyId) {
    super.connect(`${server.url}${lobbyId}`);
  }

  onJoinSucceeded(cb) {
    super.on('game_join_succeeded', cb);
  }

  onGameCanceled(cb) {
    super.on('game_canceled', cb);
  }

  ready() {
    super.emit('game_ready');
  }
}

export default GameSockets;
