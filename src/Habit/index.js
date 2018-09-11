import React, { Component } from "react";
import "./style.css";
import HabitCountButton from "../HabitCountButton";
import HabitName from "../HabitName";
import DeleteButton from "../DeleteButton";

class Habit extends Component {

  render() {
    return (
      <div>
        <ul className='habits-list'>
        {this.props.habits.map((habit, index) => {
          return (
            <li key={habit[index]} className='habit' >
              <HabitCountButton onClick={() => this.props.onClick(index)} counter={this.props.counter} count={this.props.count} />
              <HabitName key={habit} habits={habit} />
              <DeleteButton className='delete-habit-btn' deleteHabit={()=> this.props.deleteHabit(index)} />
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Habit;