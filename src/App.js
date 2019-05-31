import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Index, TicTacToe } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Index} exact path="/" />
        <Route component={TicTacToe} exact path="/TicTacToe" />
      </Router>
    </div>
  );
}

export default App;
