import React, { Component } from "react";
import HabitCountButton from "../HabitCountButton";
import "./style.css";

class Habit extends Component {
  updateHabitCounter = () => {
    this.setState(prevState => {
      let count = Number(prevState.count);
      let newCount = count + 1;
      localStorage.setItem('count', JSON.stringify(newCount));
      return ({
        count: newCount,
        counter: count,
      })
    })
  }

  render() {
    const habit = this.props.habits;
    return (
      <div className="habit">
        <HabitCountButton click={this.updateHabitCounter} count={this.props.count} />
        <p className='habit-name'>{habit}</p>
      </div>
    )
  }
}

export default Habit;