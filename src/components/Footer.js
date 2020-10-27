import React from 'react';
import '../App.css';
import { RiFacebookLine } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { RiInstagramLine } from 'react-icons/ri';
import { appstore } from '../images/appstore_2x.png';
import { playstore } from '../images/playstore_2x.png';


class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="row bg-light p-20 pt-3">
                    <div className="col-md-3">
                        <h6>POPULAR CATEGORIES</h6>
                        <p className="text-muted">Cars</p>
                        <p className="text-muted">Flats for Rent</p>
                        <p className="text-muted">Jobs</p>
                        <p className="text-muted">Mobile Phones</p>
                    </div>
                    <div className="col-md-2">
                        <h6>TRENSING SEARCHES</h6>
                        <p className="text-muted">Bikes</p>
                        <p className="text-muted">Watches</p>
                        <p className="text-muted">BOOKS</p>
                        <p className="text-muted">Dogs</p>
                    </div>
                    <div className="col-md-2">
                        <h6>ABOUT US</h6>
                        <p className="text-muted">About OLX</p>
                        <p className="text-muted">OLX Blog</p>
                        <p className="text-muted">Contact Us</p>
                        <p className="text-muted">OLX for Bussiness</p>
                    </div>
                    <div className="col-md-2">
                        <h6>OLX</h6>
                        <p className="text-muted">Help</p>
                        <p className="text-muted">Sitemap</p>
                        <p className="text-muted">Legal Privacy Information</p>
                    </div>
                    <div className="col-md-3">
                        <h6>FOLLOW US</h6>
                            <RiFacebookLine className="border border-secondary rounded-circle  p-1" size="20"/>
                            <AiOutlineTwitter className="border border-secondary rounded-circle p-1 ml-2" size="20"/>
                            <AiOutlineYoutube className="border border-secondary rounded-circle  p-1 ml-2" size="20"/>
                            <RiInstagramLine className="border border-secondary rounded-circle  p-1 ml-2" size="20"/>
                            <div className="d-inline">
                                <img src={ playstore } />
                                <img src={ appstore } />
                            </div>
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