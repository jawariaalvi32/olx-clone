import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Product from '../layouts/productDetail.js';
import Modal from '../components/modal.js';
import Home from '../layouts/Home.js';



class AppRouter extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={ Home }/>
                <Route  path="/product" component={ Product }/>

            </Router>
        )
    }
}
export default AppRouter;