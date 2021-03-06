import React, { Component } from "react";
import "./style.css";
import Habit from "../Habit";
import DeleteButton from "../DeleteButton";
import arrow from '../images/arrow.gif'

class Habits extends Component {
  render() {
    return (
      <div>
        <ul className='habits-list'>
          {this.props.habits.length > 0 && this.props.habits.map((habit, index) => {
            const style = {
              backgroundColor: `${habit.color}60`
            }
            return (
              <li key={`${habit.text} ${index}`} className='habit' style={style} >
                <Habit
                  key={habit.text}
                  id={index}
                  habits={habit.text}
                  color={habit.color}
                  count={habit.count}
                  counter={() => this.props.counter(index)}
                  confetti={this.props.confetti}
                  confettiConfig={this.props.confettiConfig}
                />
                <DeleteButton
                  className='delete-habit-btn'
                  deleteHabit={() => this.props.deleteHabit(index)}
                />
              </li>
            )
          })}
          {this.props.habits.length === 0 && (
            <div className='empty-habits-message'>
              <p>create a new habit using the button below!</p>
              <img src={arrow} alt='animated arrow' />
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default Habits;