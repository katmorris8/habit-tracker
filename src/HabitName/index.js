import React, { Component } from "react";
import "./style.css";

class HabitName extends Component {

  render () {
    const habit = this.props.habits;
    return (
      <p>{habit}</p>
    )
  }
}

export default HabitName;