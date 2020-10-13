import React, { Component } from "react";
import "./style.css";

class HabitInput extends Component {
  render() {
    return (
      <form onSubmit={this.props.habitInput} >
        <input 
          className='habit-input' 
          placeholder='enter new habit name' 
          onChange={this.props.onChange} 
          value={this.props.value} 
        />
      </form>
    )
  }
}

export default HabitInput;