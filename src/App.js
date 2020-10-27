import React from 'react';
import './App.css';
import Product from './components/Product';
import AppRouter from './config/router.js';
import Modal from './components/modal';

class App extends React.Component {
  render() {
    return (
      < AppRouter />
    );
  }
}

export default App;
