import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import product from '../images/phone-app.png';
import { connect } from 'react-redux';
import { setProducts } from '../store/action';


class Card extends React.Component {
   
    
    componentDidMount() {
        this.props.setProducts()
    }
    render() {
        console.log("PRODUCTS => ",this.props.pro)

        return (
            <div className="container">
                <h4 className="mt-3 mb-3">Fresh Recommendations</h4>
                <div className="row ml-15">
                    {this.props.pro.map(prod => <div key={prod.key}>
                        <div className="col-md-4 col-lg-3 col-xs-12 col-sm-6 m-05 justify-content-center d-flex">
                            <Link to="/product">
                                <div className="card" style={{width: '17rem'}}>
                                    <img src={prod.img} className="card-img-top" alt="Product Image" />
                                    <div className="card-body">
                                    <h5 className="card-title">RS {prod.price}</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="text-muted">
                                        <p className="d-inline">{prod.location}</p>
                                        <p className="ml-5 mr-0 d-inline">19,sep</p>
                                    </div>                   
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>)}
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    pro : state.pro
})

const mapDispatchToProps = (dispatch) => ({
    setProducts: () => dispatch(setProducts())
})


export default connect(mapStateToProps,mapDispatchToProps)(Card);