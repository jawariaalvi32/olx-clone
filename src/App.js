import React from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Hero from './components/hero.js';
import Banner from './components/banner.js';
import Card from './components/card.js';


class App extends React.Component {
  render() {
    return (
      <div>
        < Header />
        < Hero />
        < Banner />
        <div className="container">
          <div className="row">
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          </div>
        </div>
        <br/>
        <br/>

        < Footer />
      </div>
    );
  }
}

export default App;
