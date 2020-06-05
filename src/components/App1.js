import React from "react";
import { GoogleComponent } from "react-google-location";
import MyFancyComponent from "./direction.js";
import "./map.css";
class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      Place: "",
      lati: "",
      lngi: "",
      Place1: "",
      lati1: "",
      lngi1: "",
      userid: 1,
      userregistcarid: 1,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handlechange1 = this.handlechange1.bind(this);
    this.geolocation = this.getlocation.bind(this);
    this.getcoordinate = this.getcoordinate.bind(this);
    this.reversegeocoding = this.reversegeocoding.bind(this);
    this.handleError = this.handleError.bind(this);
    this.placeride = this.placeride.bind(this);
  }   
  async componentDidMount() {
    await fetch('http://localhost:4000/verifytok', {
      method: 'post',
      headers: {'Content-Type':'application/json','authorization':localStorage.getItem('tok')},
  }).then(async res=>res.text()).then(res => this.setState({status:res}));
  if(this.state.status=='Forbidden'){
    this.props.history.push('/login')
  } else{
    this.geolocation();
  }}
  
  getlocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getcoordinate,
        this.handleError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getcoordinate(position) {
    this.setState({
      lati: position.coords.latitude,
      lngi: position.coords.longitude,
    });
    this.reversegeocoding();
  }
  reversegeocoding() {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        this.state.lati +
        "," +
        this.state.lngi +
        "&key=AIzaSyB8BvbZp0i7LZw4mbhDiRKdbjYH_BZfM_c"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ Place: data.results[0].formatted_address })
      )
      .catch((error) => alert(error));
  }
  handleError(error) {
    // eslint-disable-next-line default-case
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  handlechange(e) {
    this.setState({
      lati: e.coordinates.lat,
      lngi: e.coordinates.lng,
      Place: e.place,
    });
  }
  handlechange1(e) {
    this.setState({
      lati1: e.coordinates.lat,
      lngi1: e.coordinates.lng,
      Place1: e.place,
    });
  }
  placeride() {
    fetch("http://localhost:4000/addride", {
      method: "post",
      headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') },
      body: JSON.stringify({
        userid: this.state.userid,
        userregistcarid: this.state.userregistcarid,
        startlat: this.state.lati,
        startlng: this.state.lngi,
        endlat: this.state.lati1,
        endlng: this.state.lngi1,
        Starting_address: this.state.Place,
        End_adrress: this.state.Place1,
      }),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  }
  render() {
    return (
      <div class="App1">
        {/* <img src = {LoginBG} alt = "background"/> */}
        {/* {this.state.lati} */}
        {/* {this.state.lngi} */}
        {/* <p class = "loc">Current Location: {this.state.Place} </p> */}
        <header>
          <h1>
            <a
              href="index.html"
              style={{ textDecoration: "none", color: "white" }}
            >
              KarShare
            </a>
          </h1>
        </header>
        <MyFancyComponent lat1={this.state.lati} lng1={this.state.lngi} />

        <GoogleComponent
          apiKey={"AIzaSyB8BvbZp0i7LZw4mbhDiRKdbjYH_BZfM_c"}
          language={"en"}
          country={"country:pk"}
          coordinates={true}
          onChange={this.handlechange}
        />

        <GoogleComponent
          apiKey={"AIzaSyB8BvbZp0i7LZw4mbhDiRKdbjYH_BZfM_c"}
          language={"en"}
          country={"country:pk"}
          coordinates={true}
          onChange={this.handlechange1}
        />
        <br></br>
        <form autocomplete="off">
          {/* <label
            for="cartype"
            style={{ marginLeft: "5px", padding: "1px", color: "white", fontSize: "16px" }}
          >
            Car Type
          </label>
          <select id="cartype" name="cartype">
            <option value="bike">Bike</option>
            <option value="bus">Bus</option>
            <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
          </select> */}
{/* 
          <br></br>
          <br></br>
          <label
            for="payment"
            style={{ marginLeft: "9px", color: "white", fontSize: "16px" }}
          >
            Payment
          </label>
          <select id="payment" name="payment">
            <option value="cash">Cash</option>
            <option value="addcard">+ add a credit card</option> */}
            {/* <option value=""></option>
            <option value=""></option> */}
          {/* </select> */}
        </form>
        <button type="button" class="buttonp" onClick={this.placeride}>
          Book ride
        </button>
        <br></br>

        {/* <div>
          <Footer />
        </div> */}
      </div>
    );
  }
}
export default App1;
