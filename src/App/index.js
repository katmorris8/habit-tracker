import React, { Component } from "react";
import "./style.css";
import Nav from "../Nav";
import HabitInput from "../HabitInput";
import Habit from "../Habit";
import Awards from "../Awards";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habitInput: '',
      habits: JSON.parse(localStorage.getItem('habits')) || [],
      currentPanel: 'habits',
      count: 0,
      counter: JSON.parse(localStorage.getItem('counter')) || [0],
      longestStreak: JSON.parse(localStorage.getItem('streak')) || [],
    }
  }

  setPanel = panel => {
    this.setState({
      currentPanel: panel,
    })
  }

  handleChange = event => {
    this.setState({
      habitInput: event.target.value,
    })
  }

  updateHabitInput = event => {
    event.preventDefault();
    this.setState(prevState => {
      const habitList = [...prevState.habits];
      habitList.push(this.state.habitInput);
      localStorage.setItem('habits', JSON.stringify(habitList));
      return ({
        habits: habitList,
        habitInput: '',
      })
    })
  }

  handleClick = event => {
    this.setState({
      count: event.target.count,
    })
  }

  updateHabitCounter = () => {
    this.setState(prevState => {
      const counter = [...prevState.counter];
      counter.push(prevState.count + 1);
      localStorage.setItem('counter', JSON.stringify(counter));
      return ({
        counter: counter,
      })
    })
  }

  deleteHabit = index => {
    this.setState(prevState => {
      const habitList = [...prevState.habits];
      habitList.splice(index, 1);
      localStorage.setItem('habits', JSON.stringify(habitList));
      return ({
        habits: habitList
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <h1>Habit Tracker</h1>
          <Nav setPanel={this.setPanel} />
        </div>
        <div className='main'>
          {this.state.currentPanel === 'habits' && (
            <div>
              <HabitInput
                habitInput={this.updateHabitInput}
                onChange={this.handleChange}
                value={this.state.habitInput}
              />
              <Habit
                habits={this.state.habits}
                onClick={this.handleClick}
                count={this.state.counter}
                habitCounter={this.updateHabitCounter}
                deleteHabit={this.deleteHabit}
              />
            </div>
          )}
          {this.state.currentPanel === 'awards' && (
            <Awards habits={this.state.habits} />
          )}
        </div>
      </div>
    )
  }
}

export default App;