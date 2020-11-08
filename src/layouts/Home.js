import React from 'react';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import Hero from '../components/hero.js';
import Banner from '../components/banner.js';
import Card from '../components/card.js';
import PhoneApp from '../components/PhoneApp.js';
import '../App.css';


class Home extends React.Component {
  render() {
    return (
        <div>
            < Header />
            < Hero />
            < Banner />
            < Card />
            < PhoneApp />
            < Footer /> 
        </div>
    );
  }
}

export default Home;
