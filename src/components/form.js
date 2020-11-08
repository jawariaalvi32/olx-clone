import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { imgUpload } from '../store/action';
import { BiImageAdd } from 'react-icons/bi'

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            img: ''
        }
    }
    
    changeHandler = (e) => {
        if (e.target.files[0]) {
            this.setState({
                img : e.target.files[0]
            })

        }
    }

    render() {
        const { img } = this.state;

        return (
        <div className="card m-auto" style={{width: '35rem'}}>
            <div className="card-header">
                SELECTED CATEGORY
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <h5 className="card-title">INCLUDE SOME DETAILS</h5>
                    <label>Bedrooms</label><br/>
                    <select name="cars" className="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="Studio">Studio</option>
                    </select>
                    <label>Bedrooms</label><br/>
                    <select name="cars" className="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="Studio">Studio</option>
                    </select>
                    <label>Area unit</label>
                </li>
                <li className="list-group-item">
                    <h5>SET A PRICE</h5>
                    <input type="number" placeholder="Price" className="form-control border-secondary"/>
                </li>
                <li className="list-group-item">
                    <h5>UPLOAD PHOTOS</h5>
                    <div className="d-flex">
                        <div className="card m-2" style={{width: '8rem'}}>
                            <div className="card-body">
                            <input type="file" onChange={this.changeHandler} />
                            <BiImageAdd size="22" className="m-auto"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <h5>CONFIRM YOUR LOCATION</h5>
                    <select name="location" className="form-control">
                        <option value="1">Azad KAshmir</option>
                        <option value="2">Balochistan</option>
                        <option value="3">Islamabad</option>
                        <option value="4">Punjab</option>
                        <option value="Studio">Sindh</option>
                    </select>               
                </li>
                <li className="list-group-item">
                    <h5>REVIEW YOUR DETAILS</h5>
                    <label>Name</label>
                    <input type="text" placeholder="Name" className="form-control border-secondary"/>
                    <h6>Let's verify your account</h6>
                    <p>We will send you a confirmation code by sms on the next step.</p>
                    <label>Mobile Number</label>
                    <input type="number" placeholder="Phone Number" className="form-control border-secondary"/>
                </li>
                <li className="list-group-item">
                    <span className="btn btn-secondary" onClick={() => this.props.imgUpload(img)} >Post now</span>
                </li>
            </ul>
        </div>

            
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    imgUpload: (img) => dispatch(imgUpload(img))
})


export default connect(null, mapDispatchToProps)(Form);