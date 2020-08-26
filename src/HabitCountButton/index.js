import React, { Component } from "react";
import "./style.css";

class HabitCountButton extends Component {  
  render () {
    return (
      <button className='counter-btn' id={this.props.id} onClick={this.props.click} count={this.props.count}>{this.props.count}</button>
    )
  }
}

export default HabitCountButton;