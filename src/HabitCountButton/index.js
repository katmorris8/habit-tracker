import React, { Component } from "react";
import Confetti from 'react-dom-confetti';
import "./style.css";

class HabitCountButton extends Component {  
  render () {
    return (
      <button className='counter-btn' onClick={this.props.click}>
        {this.props.count}
        <Confetti className="confetti" active={ this.props.confetti } config={ this.props.confettiConfig }/>
      </button>
    )
  }
}

export default HabitCountButton;