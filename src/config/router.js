import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Product from '../layouts/productDetail.js';
import Home from '../layouts/Home.js';
import Form from '../components/form';
import Categories from '../components/categories.js';



class AppRouter extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={ Home }/>
                <Route  path="/product" component={ Product }/>
                <Route  path="/sell" component={ Form }/>
                <Route  path="/categories" component={ Categories }/>

            </Router>
        )
    }
}
export default AppRouter;