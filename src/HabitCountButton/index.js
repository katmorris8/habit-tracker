import React, { Component } from "react";
import "./style.css";

class HabitCountButton extends Component {

  render () {
    return (
      <button className='counter-btn' onClick={this.props.onClick}>{this.props.habitCounter}</button>
    )
  }
}

export default HabitCountButton;