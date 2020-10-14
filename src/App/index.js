import React, { Component } from "react";
import "./style.css";
import Nav from "../Nav";
import HabitInput from "../HabitInput";
import Habits from "../Habits";
import Awards from "../Awards";

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

let colorIndex = -1;

const storedHabits = (item) => JSON.parse(localStorage.getItem(item));

const setLocalStorage = (item, list) => localStorage.setItem(item, JSON.stringify(list));

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habitInput: '',
      habits: storedHabits('habits') || [],
      currentPanel: 'habits',
      confetti: false
    }
  }

  setPanel = panel => {
    if (panel === 'habits') {
      this.setHabitColor()
    }
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
      deleted: false,
      color: ''
    }
    this.setState(prevState => {
      const habitList = [...prevState.habits];
      habitList.push(newHabit);
      setLocalStorage('habits', habitList);
      this.setPanel('habits');
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
      if (habitList[index].count === 2) {
        habitList[index].awarded = true;
        setLocalStorage('habits', habitList);
        return ({
          habits: habitList,
          confetti: true
        })
      } else {
        setLocalStorage('habits', habitList);
        return ({
          habits: habitList,
          confetti: false
        })
      }
    })
  }

  deleteHabit = index => {
    this.setState(prevState => {
      const habitList = [...prevState.habits];
      habitList.splice(index, 1);
      setLocalStorage('habits', habitList);
      return ({
        habits: habitList
      })
    })
  }

  habitColors = () => {
    colorIndex++;
    if (colorIndex >= confettiConfig.colors.length) {
      colorIndex = 0;
    }
    return confettiConfig.colors[colorIndex];
  }

  setHabitColor = () => {
    this.setState(prevState => {
      const habitList = [...prevState.habits];
      habitList.forEach(habit => habit.color = this.habitColors());
      setLocalStorage('habits', habitList);
      colorIndex = -1;
      return ({
        habits: habitList
      })
    })
  }

  render() {
    return (
      <div className="app">
        <div className='header'>
          <h1>Habit Tracker</h1>
        </div>
        <div className='main'>
          {this.state.currentPanel === 'habits' && (
            <Habits
              habits={this.state.habits}
              counter={this.updateHabitCounter}
              deleteHabit={this.deleteHabit}
              confetti={this.state.confetti}
              confettiConfig={confettiConfig}
            />
          )}
          {this.state.currentPanel === 'create new' && (
            <HabitInput
              habitInput={this.handleSubmit}
              onChange={this.handleChange}
              value={this.state.habitInput}
            />
          )}
          {this.state.currentPanel === 'awards' && (
            <Awards habits={this.state.habits} />
          )}
        </div>
        <div className='nav-container'>
          <Nav
            setPanel={this.setPanel}
            panel={this.state.currentPanel}
            animate={this.state.confetti}
          />
        </div>
      </div>
    )
  }
}

export default App;