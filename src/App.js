import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Index } from './src/pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Index} />
      </Router>
    </div>
  );
}

export default App;
