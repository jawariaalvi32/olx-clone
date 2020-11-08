import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Product from '../layouts/productDetail.js';
import Home from '../layouts/Home.js';
import Form from '../components/form';



class AppRouter extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={ Home }/>
                <Route  path="/product" component={ Product }/>
                <Route  path="/sell" component={ Form }/>
            </Router>
        )
    }
}
export default AppRouter;