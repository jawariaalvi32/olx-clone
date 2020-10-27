import React from 'react';
import '../App.css';
import AppRouter from '../config/router.js';
import { Link } from "react-router-dom";
import product from '../images/phone-app.png';


class Card extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-lg-3 col-xs-12 col-sm-6 m-05">
                <a href="/product">
                    <div className="card" style={{width: '17rem'}}>
                        <img src={product} className="card-img-top" alt="Product Image" />
                        <div className="card-body">
                        <h5 className="card-title">RS 32,500</h5>
                        <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="text-muted">
                            <p className="d-inline">Gulshan colony, Lahore</p>
                            <p className="ml-5 mr-0 d-inline">19,sep</p>
                        </div>                   
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default Card;