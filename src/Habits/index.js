import React, { Component } from "react";
import "./style.css";
import HabitCountButton from "../HabitCountButton";
import Habit from "../Habit";
import DeleteButton from "../DeleteButton";

class Habits extends Component {

  render() {
    return (
      <div>
        <ul className='habits-list'>
        {this.props.habits.map((habit, index) => {
          return (
            <li key={habit[index]} className='habit' >
              <HabitCountButton key={index} />
              <Habit key={habit} habits={habit} />
              <DeleteButton className='delete-habit-btn' deleteHabit={()=> this.props.deleteHabit(index)} />
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Habits;