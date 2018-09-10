import React, { Component } from "react";
import "./style.css";
import HabitName from "../HabitName";

class Awards extends Component {

  render() {
    return (
      <div>
        {this.props.habits.map((habit, index) => {
            return (
              <div key={habit[index]}>
                ⭐️
                <HabitName habits={habit} />
              </div>
            )
          })}
      </div>
    )
  }
}

export default Awards;