import React from 'react';
import '../App.css';


class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-light p-20 pt-3">
                    <div className="col-md-3">
                        <h6>POPULAR CATEGORIES</h6>
                        <p>Cars</p>
                        <p>Flats for Rent</p>
                        <p>Jobs</p>
                        <p>Mobile Phones</p>
                    </div>
                    <div className="col-md-2">
                        <h6>TRENSING SEARCHES</h6>
                        <p>Bikes</p>
                        <p>Watches</p>
                        <p>BOOKS</p>
                        <p>Dogs</p>
                    </div>
                    <div className="col-md-2">
                        <h6>ABOUT US</h6>
                        <p>About OLX</p>
                        <p>OLX Blog</p>
                        <p>Contact Us</p>
                        <p>OLX for Bussiness</p>
                    </div>
                    <div className="col-md-2">
                        <h6>OLX</h6>
                        <p>Help</p>
                        <p>Sitemap</p>
                        <p>Legal Privacy Information</p>
                    </div>
                    <div className="col-md-3">
                        <h6>FOLLOW US</h6>
                        <p>Cars</p>
                        <p>Flats for Rent</p>
                        <p>Jobs</p>
                        <p>Mobile Phones</p>
                    </div>
                </div>
                <div className="footer row p-20 pt-2">
                    <p className="col-md-8"><b>Other Countries India</b> - South Africa - Indonesia</p>
                    <p className="col-md-4">Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                </div>
            </div>
        )
    }
}

export default Footer;