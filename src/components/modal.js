import React from 'react';
import '../App.css';
import { RiFacebookLine } from 'react-icons/ri';
import { RiGoogleLine } from 'react-icons/ri';
import guitar from '../images/loginEntryPointPost.png';
import fav from '../images/loginEntryPointFavorite.png';
import chat from '../images/loginEntryPointChat.png';

class Modal extends React.Component {
    state = { textClass: 'modal-dialog d-bock' };

    showModal = () => {
      this.setState({ textClass: 'modal-dialog d-block' });
    };
  
    hideModal = () => {
      this.setState({ textClass: 'modal-dialog d-none' });
    };
    render() {
        return (
                <div className={this.state.textClass} role="document">
                    <div className="modal-content w-75 m-auto">
                        <div className="modal-body">
                            <button type="button" className="close" onClick={this.hideModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-25 m-auto" src={ guitar } alt="First slide" />
                                    <br/>
                                    <p className="text-center text-muted">Help make OLX safer place to shop</p>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={ fav } alt="Second slide" />
                                    <p className="text-center text-muted">Contact and deals faster</p>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={ chat } alt="Third slide" />
                                    <p className="text-center text-muted">Save all your favourite items at one place</p>
                                </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-outline-dark form-control mb-3">
                                <RiFacebookLine className="border border-secondary rounded-circle  p-1 mr-3" size="20"/>
                                Continue with facebook
                            </button>
                            <button type="button" className="btn btn-outline-dark form-control mb-3">Continue with phone</button>
                            <button type="button" className="btn btn-outline-dark form-control mb-3">Continue with email</button>
                            <button type="button" className="btn btn-outline-dark form-control mb-3">
                                <RiGoogleLine className="border border-secondary rounded-circle  p-1 mr-3" size="20"/>
                                Continue with Google
                            </button>
                            <p className="text-muted text-center mt-3">We won't share your personal details with anyone</p>                            
                        </div>
                    </div>
                </div>
        
        )
    }
}

export default Modal;