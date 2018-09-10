import React, { Component } from "react";
import "./style.css";
import HabitInput from "../HabitInput";
import Habit from "../Habit";
import Nav from "../Nav";
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
            <Habit habits={this.state.habits} />
          </div>
        )}
        {this.state.currentPanel === 'awards' && (
          <Awards />
        )}

      </div>
    )
  }
}

export default App;