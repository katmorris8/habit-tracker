import React, { Component } from "react";
import "./style.css";

class HabitCountButton extends Component {

  render () {
    return (
      <button>{this.props.counter}</button>
    )
  }
}

export default HabitCountButton;