import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai';


class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-20">
                    <div className="navbar-brand"><img src={logo}  width="40px" alt="Logo"/></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form>
                            <div className="row pt-3">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Pakistan" />
                                </div>
                                <div className="col d-flex">
                                    <input type="text" className="form-control" id="search-text" placeholder="Find Cars, Mobile Phones and more.." />
                                    <button className="btn mb-2 Search text-white"><AiOutlineSearch size="18"/></button>
                                </div>
                            </div>
                        </form>
                        <div className="col">
                            <button type="button" className="btn btn-link">Login</button>
                        </div>
                        <div className="col d-flex">
                           <a href="/modal"> <button className="btn sell">+ Sell</button></a>
                        </div>
                    </div>
                </nav>
                
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <h6 className="mb-0 mt-1"><a className="nav-link active" href="#">ALL CATEGORIES</a></h6>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Tablets</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Mobile Phones</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Cars</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Motorcycles</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Houses</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">TV-Video-Audio</a>
                    </li>
                </ul>
            </div>

            
        )
    }
}

export default Header;