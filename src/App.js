import React from 'react';
import './App.css';
import AppRouter from './config/router.js';

class App extends React.Component {
  render() {
    return (
      <div>
        < AppRouter />
      </div>
    );
  }
}

export default App;
