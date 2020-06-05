import React from "react";
import LoginBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";
import HamburgerMenu from "./HamburgerMenu";
import Homebutton from "./Homebutton"
import {Link}  from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Logout from './Logout'
function HeaderAdmin() {
  return (
      
      <header>
          <button type="button" class="button">
      <Link to='/editheader'>
        <span> Edit Headers </span>
        </Link>
    </button>
    <button1 type="button1" class="button1">
      <Link to='/Master'>
        <span> Master Panel </span>
      </Link>
    </button1>
    <Logout/>
    </header>
    
      
  )}
  export default HeaderAdmin
