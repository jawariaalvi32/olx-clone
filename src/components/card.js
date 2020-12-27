import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setProducts, showProduct } from '../store/action';
import { AiOutlineHeart } from 'react-icons/ai'


class Card extends React.Component {
    state = {
        pro : []
    }
    componentDidMount() {
        this.props.setProducts()
        console.log("PRODUCTS => ",this.props.productlist)

        this.setState({
            pro: this.props.productlist
        })

    }
    // shouldComponentUpdate() {
    //     return true
    // }
    render() {
        console.log("PRODUCTS => ",this.props.productlist)

        console.log("PRODUCTS => ",this.props.productlist.length)
        let product = this.props.productlist ? this.props.productlist : ''

        console.log(product)
        return product ? (
            <div className="container">
            <h4 className="mt-3 mb-3">Fresh Recommendations</h4>
            <div className="row ml-15">
                 {product.map(
                    prod => { return <div key={prod.key}>
                    <div className="col-md-4 col-lg-3 col-xs-12 col-sm-6 m-05 justify-content-center d-flex">
                        <Link to="/product" onClick={() =>  this.props.showProduct(prod)}>
                            <div className="card" style={{width: '17rem'}}>
                                <img src={prod.img} className="card-img-top" alt="Product Image" height="250px"/>
                                <div className="card-body">
                                <AiOutlineHeart style={{float : "right"}} size="22"/>
                                <h5 className="card-title">RS {prod.price}</h5>
                                <p className="card-text text-muted">{prod.name}</p>
                                <div className="text-muted">
                                    <p className="d-inline">{prod.location}</p>
                                    <p className="ml-5 mr-0 d-inline">19,sep</p>
                                </div>                   
                                </div>
                            </div>
                        </Link>
                    </div>
                 </div>})}
            </div>
        </div>
        ):
        (<div>Load..</div>)


            // <div className="container">
            //     <h4 className="mt-3 mb-3">Fresh Recommendations</h4>
            //     <div className="row ml-15">
            //         {/* // {this.props.productlist.map(
            //         //     prod => { return <div key={prod.key}>
            //         //     <div className="col-md-4 col-lg-3 col-xs-12 col-sm-6 m-05 justify-content-center d-flex">
            //         //         <Link to="/product" onClick={() =>  this.props.showProduct(prod)}>
            //         //             <div className="card" style={{width: '17rem'}}>
            //         //                 <img src={prod.img} className="card-img-top" alt="Product Image" height="250px"/>
            //         //                 <div className="card-body">
            //         //                 <AiOutlineHeart style={{float : "right"}} size="22"/>
            //         //                 <h5 className="card-title">RS {prod.price}</h5>
            //         //                 <p className="card-text text-muted">{prod.name}</p>
            //         //                 <div className="text-muted">
            //         //                     <p className="d-inline">{prod.location}</p>
            //         //                     <p className="ml-5 mr-0 d-inline">19,sep</p>
            //         //                 </div>                   
            //         //                 </div>
            //         //             </div>
            //         //         </Link>
            //         //     </div>
            //         //  </div>})} */}
            //     </div>
            // </div>
            
        // )
    }
}

const mapStateToProps = (state) => ({
    productlist : state.productlist
})

const mapDispatchToProps = (dispatch) => ({
    setProducts: () => dispatch(setProducts()),
    showProduct: (prod) => dispatch(showProduct(prod))

})


export default connect(mapStateToProps,mapDispatchToProps)(Card);