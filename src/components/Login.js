import React from "react";
import Header from "./Header";
import { Redirect, withRouter } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      status: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  async submithandler(event) {
    event.preventDefault();
    await fetch("http://localhost:4000/loginauth", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("tok", res.token);
        localStorage.setItem("type", res.status1);
      });
    if (
      localStorage.getItem("tok") &&
      localStorage.getItem("tok") !== "undefined" &&
      localStorage.getItem("type") == "customer"
    ) {
      this.props.history.push("/");
    } else if (
      localStorage.getItem("tok") &&
      localStorage.getItem("tok") !== "undefined" &&
      localStorage.getItem("type") == "Admin"
    ) {
      this.props.history.push("/admin");
    } else if (localStorage.getItem("tok") == "undefined") {
      this.setState({ status: "Error" });
    }
  }
  handlechange(event) {
    const { name, value, checked, type } = event.target;
    event.target.type == "checkbox"
      ? this.setState({ [event.target.name]: event.target.checked })
      : this.setState({
          [event.target.name]: event.target.value,
        });
  }

  render() {
    if (
      localStorage.getItem("tok") &&
      localStorage.getItem("tok") !== "undefined"
    ) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login" style = {{backgroundPositionY: "20px"}}>
        <div>
          <Header />
        </div>

        <title>KarShare Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className="boxL">
          <h2 style = {{textShadow: "black 0px 5px 10px"}}>Welcome to KarShare</h2>
          <form onSubmit={this.submithandler}>
            <div className="inputBoxL">
              <input
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.handlechange}
                required
                autoComplete="off"
              />
              <label>Email Address</label>
            </div>
            <div className="inputBoxL">
              <input
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handlechange}
                required
                autoComplete="off"
              />
              <label>Password</label>
            </div>
            <button type="submit" class="buttonLogin"> Login</button>
          </form>
        </div>
        {this.state.email}
        {this.state.password}
        {localStorage.getItem("tok")}
        {this.state.status}
      </div>
    );
  }
}
export default withRouter(Login);
