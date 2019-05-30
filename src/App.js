import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Index } from './src/pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Index} exact path="/" />
      </Router>
    </div>
  );
}

export default App;
