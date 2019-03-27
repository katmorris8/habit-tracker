import React, { Component } from "react";
import "./style.css";

class Habit extends Component {

  render () {
    const habit = this.props.habits;
    return (
      <p className='habit-name' >{habit}</p>
    )
  }
}

export default Habit;