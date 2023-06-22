import React, { Component } from 'react'

 class Taxi extends Component {
    state={
        car:"default",
        starting:"",
        destination:""

    };
         
    handleChange=event=> {
        console.log(event.target.name);
        this.setState({[event.target.name]:event.target.value});
      }
    
      handleBookButtonClick=(e)=>{
        console.log(e.target.name);
        
       };
  render() {
    return (
      <div>
        <h1>Taxi</h1>
       <label>Starting Point:</label> <input type="text" name="starting" value={this.state.starting} onChange={this.handleChange}></input><br></br><br></br>
        <label>Destination: </label><input type="text" name="destination" value={this.state.destination} onChange={this.handleChange}></input><br></br><br></br>
        <label>Date and Time </label><input type="text"></input><br></br><br></br>
        <label>Type of car </label>

        <select name="car" value={this.state.car} onChange={this.handleChange}>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
        
          </select>
        <br></br><br></br>
        <button onClick={this.handleBookButtonClick}>BOOK</button>

      </div>
    )
  }
}
export default Taxi