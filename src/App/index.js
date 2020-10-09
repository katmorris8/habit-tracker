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
      setLocalStorage('habits', habitList);
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

  render() {
    // const opacity = 70;
    return (
      <div className="App">
        {/* <div className='swatches'>
          <div className='swatch' style={{backgroundColor: `${confettiConfig.colors[0]}${opacity}`}}>0</div>
          <div className='swatch' style={{backgroundColor: `${confettiConfig.colors[1]}${opacity}`}}>0</div>
          <div className='swatch' style={{backgroundColor: `${confettiConfig.colors[2]}${opacity}`}}>0</div>
          <div className='swatch' style={{backgroundColor: `${confettiConfig.colors[3]}${opacity}`}}>0</div>
          <div className='swatch' style={{backgroundColor: `${confettiConfig.colors[4]}${opacity}`}}>0</div>
        </div> */}
        <div className='header'>
          <h1>Habit Tracker</h1>
        </div>
        <div className='main'>
          {this.state.currentPanel === 'habits' && (
            <div>
              {/* <HabitInput
                habitInput={this.handleSubmit}
                onChange={this.handleChange}
                value={this.state.habitInput}
              /> */}
              <Habits
                habits={this.state.habits}
                counter={this.updateHabitCounter}
                deleteHabit={this.deleteHabit}
                confetti={this.state.confetti}
                confettiConfig={confettiConfig}
              />
            </div>
          )}
          {this.state.currentPanel === 'awards' && (
            <Awards habits={this.state.habits} />
          )}
        </div>
        <div>
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