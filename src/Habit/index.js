import React, { Component } from "react";
import HabitCountButton from "../HabitCountButton";
import "./style.css";

class Habit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      counter: JSON.parse(localStorage.getItem('count')) || 0,
    }
  }

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
        <HabitCountButton click={this.updateHabitCounter} count={this.state.count} />
        <p className='habit-name'>{habit}</p>
      </div>
    )
  }
}

export default Habit;