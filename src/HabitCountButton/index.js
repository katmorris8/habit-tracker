import React, { Component } from "react";
import "./style.css";
import Confetti from 'react-dom-confetti';

class HabitCountButton extends Component {  
  render () {
    const style = {
      backgroundColor: this.props.color
    }
    return (
      <button className='counter-btn' style={style} onClick={this.props.click}>
        {this.props.count}
        <Confetti active={ this.props.confetti } config={ this.props.confettiConfig }/>
      </button>
    )
  }
}

export default HabitCountButton;