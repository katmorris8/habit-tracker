import React, { Component } from "react";
import "./style.css";
import HabitInput from "../HabitInput";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habitInput: '',
      habits: JSON.parse(localStorage.getItem('habits')) || [],
    }
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
  
  render() {
    return (
      <div className="App">
        <h1>Habit Tracker</h1>
        <HabitInput 
          habitInput={this.updateHabitInput}
          onChange={this.handleChange} 
          value={this.state.habitInput}
        />
      </div>
    )
  }
}

export default App;