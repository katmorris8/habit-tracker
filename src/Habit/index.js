import React, { Component } from "react";
import HabitCountButton from "../HabitCountButton";
import "./style.css";

class Habit extends Component {
  render() {
    return (
      <div className="habit-info" id={this.props.id}>
        <HabitCountButton 
          click={this.props.counter} 
          color={this.props.color}
          count={this.props.count} 
          confetti={this.props.confetti}
          confettiConfig={this.props.confettiConfig}
        />
        <p className='habit-name'>{this.props.habits}</p>
      </div>
    )
  }
}

export default Habit;