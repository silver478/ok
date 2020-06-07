import React from 'react'
import Header1 from './Header1';
class Bookings extends React.Component{
constructor(){
    super()
    this.state={
        bookings:[]
    }        
    
}
    async componentDidMount() {
        await fetch("http://localhost:4000/bringbookings", {
          method: "get",
          headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') }}).
          then(async res => await res.json()).
          then(res => {this.setState({bookings:res})})
    
      }

      render(){
          return(
              <div>
                  <Header1></Header1>
{this.state.bookings.map((arr) => (
            <li key={arr.rideid}>
              Starting address: {arr.Starting_address}
              <br></br>
              Drop off: {arr.End_address}
              <br></br>
              Rider name:{arr.rider_name} ;
              <br></br>
              <div>
              </div>
              <br></br>
              <br></br>
            </li>
          ))}

              </div>
          )
      }
    }
export default Bookings