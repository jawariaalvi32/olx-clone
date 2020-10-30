import React from 'react';
import '../App.css';
import product from '../images/phone-app.png';
import Carousel from 'react-elastic-carousel';


class Product extends React.Component {
    state = {
        items: [
          {id: 1, src: product},
          {id: 2, src: product},
          {id: 3, src: product},
          {id: 4, src: product},
          {id: 5, src: product}
        ]
      }

    render() {
        const { items }  = this.state;
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8 col-xs-12 mt-3">
                            <Carousel>
                                {items.map(item => <div key={item.id}><img src={item.src} alt="product image"/></div>)}
                            </Carousel>

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