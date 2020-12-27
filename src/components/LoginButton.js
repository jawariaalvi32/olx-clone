import React from 'react';
import '../App.css';
import { BsChat } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'
import avatar from '../images/avatar_3.png'
import {Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {logout} from '../store/action'
import { connect } from 'react-redux';
class LoginButton extends React.Component { 

  render() {
    
  const handleLogout = (e) => {
    e.preventDefault()
    this.props.logout()
  }
    return (
      <div className="d-flex">
          < BsChat size="25" className="ml-2 mt-2"/>
          < MdNotificationsNone size="25" className="ml-2 mt-2"/>
          <Dropdown>
            <Dropdown.Toggle className="btn-login" id="dropdown-basic">
              <img src={ avatar } alt="Profie" width="40px" className="ml-2"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/sell">Sell Product</Link></Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),

})

export default connect(null,mapDispatchToProps)(LoginButton);
