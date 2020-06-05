import React from 'react'

class Editpanel extends React.Component{
    constructor(){
        super()
        this.state={
            Header1:"",
            Header2:"",
            Header3:""
        }
    }

    render(){
        return(
            <div>
                <input  type="text" value={this.state.fullname} name="fullname" placeholder="fullname" onChange={this.handlechange}  /><br /><br />
           
            </div>
        )
    }
}