import React from "react";
import { GoogleComponent } from "react-google-location";
import Header1 from "./Header1";
import "./BookRides.css";
import MyFancyComponent from "./direction.js";
// import "./map.css";
class Bookride extends React.Component {
  constructor() {
    super();
    this.state = {
      lati: "",
      lngi: "",
      Place: "",
      rides: [],
    };
    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  handlechange(e) {
    this.setState({
      lati: e.coordinates.lat,
      lngi: e.coordinates.lng,
      Place: e.place,
    });
  }
  async submithandler() {
    await fetch("http://localhost:4000/bringrides", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("tok"),
      },
      body: JSON.stringify({
        End_adrress: this.state.Place,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ rides: res }));
  }
  render() {
    return (
      <div className="BookRides">
        <Header1 />
        <MyFancyComponent
          lat1={this.state.lati}
          lng1={this.state.lngi}
        />
        <GoogleComponent
          style={{
            height: "30px",
            width: "30%",
            boxSizing: "border-box",
            borderRadius: "10px",
            marginLeft: "-100px",
          }}
          apiKey={"AIzaSyB8BvbZp0i7LZw4mbhDiRKdbjYH_BZfM_c"}
          language={"en"}
          country={"country:pk"}
          coordinates={true}
          onChange={this.handlechange}
        />
        <br></br>
        <button
          class="buttonp"
          onClick={this.submithandler}
          style={{ marginLeft: "10px" }}
        >
          Find rides
        </button>
        <br></br>
        <div className="RideDetails">
          {this.state.rides.map((arr) => (
            <li key={arr.rideid}>
              Starting address: {arr.Starting_address}
              <br></br>
              Drop off: {arr.End_adrress}
              <br></br>
              Rider name:{arr.fullname} &ensp;
              <br></br>
              <div>
                <button class="buttonbook" onClick={this.submithandler}>
                  Book
                </button>
              </div>
              <br></br>
              <br></br>
            </li>
          ))}
        </div>
      </div>
    );
  }
}
export default Bookride;
