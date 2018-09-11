import React, { Component } from "react";
import "./style.css";

class HabitCountButton extends Component {
  render () {
    const count = this.props.count;
    return (
      <button className='counter-btn' onClick={this.props.onClick}> {count}</button>
    )
  }
}

export default HabitCountButton;