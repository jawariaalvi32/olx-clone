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
            <div className="container">
              <h4 className="mt-3 mb-3">Fresh Recommendations</h4>
              <div className="row">
                  < Card />
                  < Card />
                  < Card />
                  < Card />
                  < Card />
              </div>
            </div>
            < PhoneApp />
            < Footer /> 
        </div>
    );
  }
}

export default Home;
