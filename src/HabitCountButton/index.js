import React, { Component } from "react";
import "./style.css";

class HabitCountButton extends Component {

  render () {
    return (
      <button className='counter-btn' >0{this.props.counter}</button>
    )
  }
}

export default HabitCountButton;