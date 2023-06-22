
//rconst
//rce
import React, { Component } from 'react'

class Form1Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
       num:""
    }
  }
  handleChange=event=> {
  
    
  }
  render() {
    return (
      <div>
        Enter Name:<input type="text" value="num" onClick={this.handleChange}></input>
         <h1>Hello</h1>
      </div>
  
    )
  }
}

export default Form1Demo
