import React from "react";
import HamburgerMenu from "./HamburgerMenu";
// import Homebutton from "./Homebutton";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logout from "./Logout";
function Header1() {
  return (
    <header>
      <h1>
      <Link to="/" style = {{textDecoration: "None", color: "white"}}>
           KarShare 
        </Link>
      </h1>
      <button type="button" class="buttonL">
        <Link to="/addride">
          <span> Add ride </span>
        </Link>
      </button>
      <button1 type="button1" class="button1">
        <Link to="/Bookrides">
          <span> Book Ride </span>
        </Link>
      </button1>
      <Logout />
    </header>
  );
}
export default Header1;
