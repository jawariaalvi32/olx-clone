import React from 'react';
// import Header from './Header.js';
import '../App.css';
import product from '../images/phone-app.png';


class Product extends React.Component {
    render() {
        return (
            <div>
                {/* < Header /> */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-12 mt-3">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={product} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={product} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={product} className="d-block w-100" alt="..." />
                                </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                                </a>
                            </div>

                            <div className="card mt-3" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title">DESCRIPTION</h5>
                                <p className="card-text">Chat with Seller</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="card mt-3" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title">RS 6,900</h5>
                                <h6 className="card-subtitle mb-2 text-muted">SAMSUNG MALAYSIA LED TV ULTRA HIGH DEFINITION BOX PACK 1YEARS WARRANTY</h6>
                                <div className="d-flex">
                                    <p className="card-text">Rashid Minhas Road, Karachi, Sindh</p>
                                    <p className="card-text ml-5">sep, 28</p> 
                                </div>
                                </div>
                            </div>
                            <div className="card mt-3" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title">Seller description</h5>
                                <h6 className="card-subtitle mb-2 text-muted">SHAHZAD SALEEM</h6>
                                <p className="card-text">Chat with Seller</p>
                                </div>
                            </div>
                            <div className="card mt-3 border border-dark" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title">Posted In</h5>
                                <p className="card-text">Rashid Minhas Road, Karachi, Sindh</p>
                                <iframe src="https://www.w3schools.com" width='100%'></iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Product;