import React from "react";
import Header from "./Header";
import { Redirect, withRouter } from "react-router-dom";
import "./SignUp.css";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      usertypeid: 1,
      Gender: "",
      contactno: "",
      password: "",
      dateofbirth: "",
      status: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  async submithandler() {
    await fetch("http://localhost:4000/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: this.state.fullname,
        contactno: this.state.contactno,
        email: this.state.email,
        password: this.state.password,
        Gender: this.state.Gender,
        usertypeid: this.state.usertypeid,
        dateofbirth: this.state.dateofbirth,
      }),
    })
      .then(async (res) => await res.json())
      .then((res) => window.sessionStorage.setItem("tok", res.token));

    if (window.sessionStorage !== "undefined") {
      this.setState({ status: "failed" });
    }
    this.props.history.push("/");
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
      window.sessionStorage.getItem("tok") &&
      window.sessionStorage.getItem("tok") !== "undefined" &&
      window.sessionStorage.getItem("type") == "customer"
    ) {
      return <Redirect to="/" />;
    } else if (
      window.sessionStorage.getItem("tok") &&
      window.sessionStorage.getItem("tok") !== "undefined" &&
      window.sessionStorage.getItem("type") == "Admin"
    ) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="signup">
        <div>
          <Header />
        </div>

        <form autoComplete="off" onSubmit={this.submithandler}>
          <div className="boxS">
            <h3
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Personal Information
            </h3>
            <label
              htmlFor="fullname"
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Full Name
            </label>
            &ensp;
            {/* <br /> */}
            <input
              type="text"
              value={this.state.fullname}
              name="fullname"
              placeholder="Enter your Full Name"
              size="24"
              onChange={this.handlechange}
              required
            />
            <br />
            <br />
            <label
              htmlFor="Gender"
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Male
            </label>
            &ensp;
            <input
              type="radio"
              value="M"
              name="Gender"
              checked={this.state.Gender == "M"}
              onChange={this.handlechange}
            />
            <br />
            <label
              htmlFor="Gender"
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Female
            </label>
            &ensp;
            <input
              type="radio"
              value="F"
              name="Gender"
              checked={this.state.Gender == "F"}
              onChange={this.handlechange}
            />
            <br />
            <label
              htmlFor="Gender"
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Other
            </label>
            &ensp;
            <input
              type="radio"
              value="O"
              name="Gender"
              checked={this.state.Gender == "O"}
              onChange={this.handlechange}
            />
            <br />
            <br />
            <label
              htmlFor="dateofbirth"
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Date of Birth
            </label>
            &ensp;
            <input
              type="date"
              value={this.state.dateofbirth}
              name="dateofbirth"
              placeholder="date"
              onChange={this.handlechange}
              required
            />
            <br />
            <br />
            <label
              htmlFor="email"
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Email address
            </label>
            &ensp;
            <input
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Enter your Email Address"
              size="24"
              onChange={this.handlechange}
              required
            />
            <br />
            <br />
            <label
              htmlFor="contactno"
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Contact Number*
            </label>
            &ensp;
            <input
              type="numeric"
              value={this.state.contactno}
              name="contactno"
              placeholder="Enter your Contact Number"
              size="24"
              onChange={this.handlechange}
            />
            <br />
            <br />
            <label
              htmlFor="password"
              style={{
                fontFamily: "Book Antiqua",
                color: "white",
                textShadow: "black 0px 0px 10px",
              }}
            >
              Password
            </label>
            &ensp;
            <input
              type="password"
              value={this.state.password}
              name="password"
              placeholder="Enter your Password"
              size="24"
              onChange={this.handlechange}
              required
            />
            <br />
            <br />
            {/* <input
              type="submit"
              name="Submit"
              defaultValue=""
              onSubmit={this.submithandler}
            /> */}
            <button type="submit" class="buttonSignUp">Sign Up</button>
          </div>
        </form>
        {this.state.fullname}
        {this.state.Gender}
        {this.state.dateofbirth}
        {this.state.email}
        {this.state.contactno}
        {this.state.password}
        {window.sessionStorage.getItem("tok")}
      </div>
    );
  }
}

export default withRouter(Signup);
