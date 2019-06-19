import io from 'socket.io-client';


class Sockets {
  connect(url) {
    this.socket = io(url) || null;
    this.socket.removeAllListeners();
  }

  close() {
    this.socket.close();
    this.socket = null;
  }

  isConnected() {
    return this.socket === null;
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
