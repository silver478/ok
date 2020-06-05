import React from "react";
// import Header from "./Header";
//import FirstBlock from "./FirstBlock";
//import SecondBlock from "./SecondBlock";
//import Footer from "./Footer";
import Home1 from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import App1 from "./App1";
import Admin from "./Admin";
//import {Link}  from 'react-router-dom'
import Bookride from "./Bookride";
import Addimage from "./Addimage";
import Updateprof from "./Updateprof";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home1} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/addride" component={App1} />
          <Route path="/Bookrides" component={Bookride} />
          <Route path="/picture" component={Addimage} />
          <Route path="/update" component={Updateprof} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
