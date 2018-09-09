import React, { Component } from "react";
import "./style.css";
import HabitCountButton from "./HabitCountButton";
import HabitName from "./HabitName";

class Habit extends Component {

  render() {
    return (
      <div>
        <HabitCountButton />
        <HabitName />
      </div>
    )
  }
}

export default Habit;