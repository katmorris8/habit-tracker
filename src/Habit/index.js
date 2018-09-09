import React, { Component } from "react";
import "./style.css";
import HabitCountButton from "../HabitCountButton";
import HabitName from "../HabitName";

class Habit extends Component {

  render() {
    return (
      <div>
        {this.props.habits.map((habit, index) => {
            return (
              <HabitName key={habit[index]} habits={habit} />
                )
          })}
      </div>
    )
  }
}

export default Habit;