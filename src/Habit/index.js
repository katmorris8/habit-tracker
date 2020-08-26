import React, { Component } from "react";
import HabitCountButton from "../HabitCountButton";
import "./style.css";

class Habit extends Component {
  render() {
    const habit = this.props.habits;
    return (
      <div className="habit-info" id={this.props.id}>
        <HabitCountButton click={this.props.counter} count={this.props.count} />
        <p className='habit-name'>{habit}</p>
      </div>
    )
  }
}

export default Habit;