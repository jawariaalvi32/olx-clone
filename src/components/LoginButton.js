import React from 'react';
import '../App.css';
import { BsChat } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'
import avatar from '../images/avatar_3.png'
import {Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class LoginButton extends React.Component { 
  render() {
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
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </div>
    );
  }
}

export default LoginButton;
