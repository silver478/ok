import React from "react";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import Header from "./Header";
import Profilehome from "./Profilehome";
import { Redirect, withRouter } from "react-router-dom";
class Home1 extends React.Component {
  render() {
    if (
      !localStorage.getItem("tok") ||
      localStorage.getItem("tok") == "undefined"
    ) {
      return (
        <div>
          <Header />
          <FirstBlock />
          <SecondBlock />
        </div>
      );
    } else if (
      localStorage.getItem("tok") &&
      localStorage.getItem("tok") !== "undefined" &&
      localStorage.getItem("type") == "Admin"
    ) {
      return <Redirect to="/admin" />;
    } else {
      return (
        <div>
          <Profilehome />
          {localStorage.getItem("type")}
        </div>
      );
    }
  }
}
export default Home1;
