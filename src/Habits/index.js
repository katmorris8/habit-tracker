import React, { Component } from "react";
import "./style.css";
import Habit from "../Habit";
import DeleteButton from "../DeleteButton";

class Habits extends Component {
  render() {
    return (
      <div>
        <ul className='habits-list'>
        {this.props.habits.map((habit, index) => {
          return (
            <li key={`${habit.text} ${index}`} className='habit' >
              <Habit 
                key={habit.text}
                id={index} 
                habits={habit.text} 
                count={habit.count} 
                counter={()=> this.props.counter(index)}
                confetti={this.props.confetti}
                confettiConfig={this.props.confettiConfig}
              />
              <DeleteButton 
                className='delete-habit-btn' 
                deleteHabit={()=> this.props.deleteHabit(index)} 
              />
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Habits;