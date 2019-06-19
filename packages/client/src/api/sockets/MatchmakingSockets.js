import Sockets from './Sockets';

class MatchmakingSockets extends Sockets {
  join(gameId) {
    super.emit('mm_join', gameId);
  }

  onMatched(cb) {
    super.on('mm_matched', cb);
  }
}

export default MatchmakingSockets;
