import React, { Component } from "react";
import "./style.css";
import HabitName from "../HabitName";

class Awards extends Component {

  render() {
    return (
      <div className='awards' >
        {this.props.habits.map((habit, index) => {
            return (
              <div key={habit[index]} className='award' >
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