import React, { Component } from "react";
import "./style.css";
import HabitCountButton from "../HabitCountButton";
import HabitName from "../HabitName";

class Habit extends Component {

  render() {
    return (
      <div>
        <ul className='habits-list'>
        {this.props.habits.map((habit, index) => {
          return (
            <li key={habit[index]} className='habit' >
              <HabitCountButton onClick={this.props.onClick} count={this.props.counter} />
              <HabitName habits={habit} />
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Habit;