import React, { Component } from "react";
import "./style.css";

class HabitName extends Component {

  render () {
    const habit = this.props.habits;
    return (
      <p className='habit-name' >{habit}</p>
    )
  }
}

export default HabitName;