import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Product from '../layouts/productDetail.js';
import Modal from '../components/modal.js';
import Home from '../layouts/Home.js';
import Fb from '../auth/Facebook';



class AppRouter extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={ Home }/>
                <Route  path="/product" component={ Product }/>
                <Route  path="/fb" component={ Fb }/>

            </Router>
        )
    }
}
export default AppRouter;