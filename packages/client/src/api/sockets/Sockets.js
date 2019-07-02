import io from 'socket.io-client';
import isNil from 'lodash/isNil';

class Sockets {
  connect(url) {
    this.socket = io(url) || null;
    this.socket.removeAllListeners();
  }

  close() {
    if (this.isConnected()) {
      this.socket.close();
      this.socket = null;
    }
  }

  isConnected() {
    return !isNil(this.socket);
  }

  emit(name, data = { }) {
    this.socket.emit(name, data);
  }

  on(name, cb) {
    this.socket.removeListener(name);
    this.socket.on(name, cb);
  }
}

export default Sockets;
