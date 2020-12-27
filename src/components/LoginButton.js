import React from 'react';
import '../App.css';
import { BsChat } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'
import avatar from '../images/avatar_3.png'
import { RiArrowDropDownLine } from 'react-icons/ri'

class LoginButton extends React.Component { 
  render() {
    return (
      <div>
          < BsChat size="25" className="ml-2"/>
          < MdNotificationsNone size="25" className="ml-2"/>
          <img src={ avatar } alt="Profie" width="40px" className="ml-2"/>
          < RiArrowDropDownLine size="30"/>
      </div>
    );
  }
}

export default LoginButton;
