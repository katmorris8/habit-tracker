import React, { Component } from "react";
import "./style.css";
import Nav from "../Nav";
import HabitInput from "../HabitInput";
import Habits from "../Habits";
import Awards from "../Awards";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habitInput: '',
      habits: JSON.parse(localStorage.getItem('habits')) || [],
      currentPanel: 'habits',
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
              <Habits
                habits={this.state.habits}
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