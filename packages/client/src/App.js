import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Index, TicTacToe } from './pages';
import { withNavbar } from './features/HOC';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={withNavbar(Index)} exact path="/" />
        <Route component={withNavbar(TicTacToe)} exact path="/TicTacToe" />
      </Router>
    </div>
  );
}

export default App;
