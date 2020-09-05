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
      habitInput: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const newHabit = {
      text: this.state.habitInput,
      count: 0,
      awarded: false,
      deleted: false
    }
    this.setState(prevState => {
      const habitList = [...prevState.habits];
      habitList.push(newHabit);
      localStorage.setItem('habits', JSON.stringify(habitList));
      return ({
        habitInput: '',
        habits: habitList
      })
    })
  }

  updateHabitCounter = index => {
    this.setState(prevState => {
      const habitList = [...prevState.habits];
      habitList[index].count += 1;
      if (habitList[index].count >= 21) {
        habitList[index].awarded = true;
      }
      localStorage.setItem('habits', JSON.stringify(habitList));
      return ({
        habits: habitList
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
                habitInput={this.handleSubmit}
                onChange={this.handleChange}
                value={this.state.habitInput}
              />
              <Habits
                habits={this.state.habits}
                counter={this.updateHabitCounter}
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