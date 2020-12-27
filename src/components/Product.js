import React from 'react';
import '../App.css';
import Carousel from 'react-elastic-carousel';
import { connect } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai'

class Product extends React.Component {

    render() {

        return (
            <div>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-8 col-xs-12 mt-3">
                            <Carousel>
                                {this.props.product.map(item => <div key={item.key}><img src={item.img} alt="product image" width="250px"/></div>)}
                            </Carousel>

                            <div className="card mt-3 w-100" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title mb-3">DESCRIPTION</h5>
                                <p className="card-text">{this.props.product[0].description}</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="card mt-3" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <AiOutlineHeart style={{float : "right"}}/>
                                    <h5 className="card-title">{this.props.product[0].price}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{this.props.product[0].name}</h6>
                                    <div className="d-flex">
                                        <p className="card-text">{this.props.product[0].location}</p>
                                        <p className="card-text ml-5 pl-5">sep, 28</p> 
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title">Seller description</h5>
                                <h6 className="card-subtitle mb-2 text-muted">SHAHZAD SALEEM</h6>
                                <button className="btn btn-outline-secondary form-control">Chat with Seller</button>
                                </div>
                            </div>
                            <div className="card mt-3 border border-dark" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title">Posted In</h5>
                                <p className="card-text">{this.props.product[0].location}</p>
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


const mapStateToProps = (state) => ({
    product : state.product
})

export default connect(mapStateToProps, null)(Product);