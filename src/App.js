import React from 'react';
import './App.css';
import Modal from './components/modal';
import Product from './components/Product';
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
