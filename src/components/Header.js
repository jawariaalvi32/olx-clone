import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai';
import  Modal  from './modal';
import LoginButton from './LoginButton';
import { connect } from 'react-redux';
import firebase from '../config/firebase'


class Header extends React.Component {
    
    render() {
        // console.log("dd",this.props.users[0].name);

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-20">
                    <Link to="/"><div className="navbar-brand mb-3"><img src={logo}  width="40px" alt="Logo"/></div></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form>
                            <div className="row">
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
                            {
                                // this.props.users[0].name == '' ? (
                                firebase.auth().currentUser == null ? (
                                    < Modal class="btn-login" text="Login"/>
                                ) : (
                                    < LoginButton />
                                )
                            }             
                        </div>
                        <div className="col d-flex">
                            < Modal class="btn sell" text="+ Sell"/>
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

const mapStateToProps = (state) => ({
    // users: state.users
})

export default connect(mapStateToProps,null)(Header);