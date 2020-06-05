import React from 'react'
import axios from 'axios';
import { Redirect, withRouter } from "react-router-dom";
class Addimage extends React.Component{
    constructor(){
        super()
    this.state={
    files:'',
    status:''
    }
    this.handlechange=this.handlechange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    }
    handlechange(event) {
        
        this.setState({files:event.target.files[0]})
    
      
      }
    onSubmit(){
        const data = new FormData()
        console.log(this.state.files)
   data.append('file', this.state.files)
   console.log(data)
   axios.put("http://localhost:4000/pics", data, {
       headers:{'authorization':localStorage.getItem('tok')} 
    // receive two    parameter endpoint url ,form data
}).then(res => { // then print response status
    console.log(res.statusText)
 })
 

this.setState({status:'true'})
}
    

    render(){
        if(this.state.status=='true'){
            return(
            <Redirect to='/'></Redirect>
            )
        }
        return(
            <div>
                <input type='file' name='file' onChange={this.handlechange}></input>
                <button onClick={this.onSubmit}> Upload picture</button>
            <img src=".\\uploads\\2020-05-31T22_35_36.891ZAround Trip (1).png"></img>
            </div>
        )
    }
}
export default withRouter(Addimage)