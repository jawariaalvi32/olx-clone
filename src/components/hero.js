import React from 'react';
import '../App.css';
import heroimg from '../images/hero_bg_pk.jpg';


class Hero extends React.Component {
    render() {
        return (
           <img src={heroimg}  width="100%"/>
        )
    }
}

export default Hero;