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
      counter: JSON.parse(localStorage.getItem('counter')) || 0,
    }
  }

  setPanel = panel => {
    this.setState({
      currentPanel: panel,
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

  handleChange = event => {
    this.setState({
      habitInput: event.target.value,
    })
  }

  handleClick = () => {
    this.setState(prevState => {
      return ({counter: prevState.counter + 1})
    })
    localStorage.setItem('counter', JSON.stringify(this.state.counter));
  }

  render() {
    return (
      <div className="App">
        <h1>Habit Tracker</h1>
        <Nav setPanel={this.setPanel} />
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
              counter={this.state.counter}
            />
          </div>
        )}
        {this.state.currentPanel === 'awards' && (
          <Awards habits={this.state.habits} />
        )}

      </div>
    )
  }
}

export default App;