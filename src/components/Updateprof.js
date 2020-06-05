import React from 'react'
import { Redirect, withRouter } from "react-router-dom";
class Updateprof extends React.Component{
constructor(){
super()
this.state = {
  fullname: "",
  email: "",
  Gender: "",
  contactno: "",
  dateofbirth: "",
  status: "",
  password:'',
  status:''
};
this.handlechange=this.handlechange.bind(this)
this.onSubmit=this.onSubmit.bind(this)
}

componentDidMount() {
  fetch("http://localhost:4000/userdetails", {
    method: "get",
    headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') }}).
    then(res => res.json()).
    then(res => {this.setState({fullname:res.name,email:res.email,Gender:res.Gender,contactno:res.contact,dateofbirth:res.date,password:res.password})})

}
handlechange(event) {
    const { name, value, checked, type } = event.target;
    event.target.type == "checkbox"
      ? this.setState({ [event.target.name]: event.target.checked })
      : this.setState({
          [event.target.name]: event.target.value,
        });
  }
  async onSubmit(){
    await fetch("http://localhost:4000/edit", {
      method: "PUT",
      headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') },
      body: JSON.stringify({
        fullname:this.state.fullname,
        email: this.state.email,
        password: this.state.password
      }),
    }).then(this.setState({status:'true'}))
      
    

  }
  render(){
    if(this.state.status=='true'){
      return(
      <Redirect to='/'></Redirect>
      )
  }
    return(
      <div>
            <input
              type="text"
              value={this.state.fullname}
              name="fullname"
              placeholder={this.state.fullname}
              size="24"
              onChange={this.handlechange}
              required
            />
             <input
              type="text"
              value={this.state.email}
              name="email"
              placeholder={this.state.email}
              size="24"
              onChange={this.handlechange}
              required
            />
              <input
              type="password"
              value={this.state.password}
              name="password"
              placeholder={this.state.password}
              size="24"
              onChange={this.handlechange}
              required
            />
            <br></br>
            <button onClick={this.onSubmit}>Update</button>
{this.state.fullname}
{this.state.password}
{this.state.email}
{this.state.status}
      </div>
    )
  }
}
export default withRouter(Updateprof);