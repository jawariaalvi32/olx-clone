import React from 'react';
import '../App.css';
import { RiGoogleLine } from 'react-icons/ri';
import guitar from '../images/loginEntryPointPost.png';
import fav from '../images/loginEntryPointFavorite.png';
import chat from '../images/loginEntryPointChat.png';
import { RiFacebookLine } from 'react-icons/ri';
import Carousel from 'react-elastic-carousel';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { facebookLogin, setData } from '../store/action';

class Sign extends React.Component {


    constructor ( ) {
        super();
        this.state = {
            items: [
              { id: 1, src: guitar, p:"Help make OLX safer place to shop" },
              { id: 2, src: fav, p:"Contact and deals faster" },
              { id: 3, src: chat, p:"Save all your favourite items at one place" }
            ],
            show: false
        }
    }

    showHideModal = () => {
        this.setState({show: !this.state.show});
    };
  

    render() {
        const { items }  = this.state;

        return (
                <div>
                  <Button onClick={() => this.showHideModal()} className={this.props.class}>{this.props.text}</Button>
                    <Modal show={this.state.show}>
                        <Modal.Body>
                            <button type="button" className="close mb-2" onClick={() => this.showHideModal()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <Carousel>
                                 {items.map(item => <div key={item.id}>
                                    <img src={item.src} alt="Slider image" className="ml-26" width="50%" />
                                    <p className="text-muted text-center">{item.p}</p>
                                </div>)}
                            </Carousel>
                            <button type="button" className="btn btn-outline-dark form-control mb-3 mt-5" onClick={ () => this.props.facebookLogin() }>
                                <RiFacebookLine className="border border-dark rounded-circle  p-1 mr-3 mb-1" size="20"/>
                                Continue with facebook
                            </button>
                            <button type="button" className="btn btn-outline-dark form-control mb-3">Continue with phone</button>
                            <button type="button" className="btn btn-outline-dark form-control mb-3">Continue with email</button>
                            <button type="button" className="btn btn-outline-dark form-control mb-3">
                                <RiGoogleLine className="border border-dark rounded-circle p-1 mr-3 mb-1" size="20"/>
                                Continue with Google
                            </button>
                            <p className="text-muted text-center mt-3">We won't share your personal details with anyone</p>    
                        </Modal.Body>
                    </Modal>
                </div>
        
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    facebookLogin: () => dispatch(facebookLogin())
})

export default connect(null, mapDispatchToProps)(Sign);