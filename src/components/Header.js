import React from "react";
import LoginBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";
import HamburgerMenu from "./HamburgerMenu";
// import Homebutton from "./Homebutton";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>
        <Link to="/" style={{ textDecoration: "None", color: "white"}}>
          <span> KarShare </span>
        </Link>
      </h1>
      <LoginBtn />
      <SignUpBtn />
      <HamburgerMenu />
    </header>
  );
}

export default Header;
