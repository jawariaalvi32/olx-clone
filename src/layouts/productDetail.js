import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductDetails from '../components/Product.js';

class Product extends React.Component {
    render() {
        return (
            <div>
                < Header />
                < ProductDetails />
                < Footer />
            </div>
        )
    }
}

export default Product;