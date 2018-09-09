import React, { Component } from "react";
import "./style.css";
import HabitCountButton from "../HabitCountButton";
import HabitName from "../HabitName";

class Habit extends Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.habits.map((habit, index) => {
          return (
            <li key={habit[index]}>
              <HabitCountButton />
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

// each time someone clicks on the button