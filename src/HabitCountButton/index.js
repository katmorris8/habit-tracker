import React, { Component } from "react";
import "./style.css";

class HabitCountButton extends Component {  
  render () {
    return (
      <button className='counter-btn' onClick={this.props.click}>
        {this.props.count}
      </button>
    )
  }
}

export default HabitCountButton;