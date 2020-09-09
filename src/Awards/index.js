import React, { Component } from "react";
import "./style.css";
import Award from '../Award';

class Awards extends Component {
  render() {
    const awardedArr = this.props.habits.map(habit => habit.awarded)
    
    return (
      <div className='awards' >
        {awardedArr.some(award => award) && this.props.habits.map((habit, index) => {
          return(
            <li key={`${habit.text} ${index} award`}>
              <Award habit={habit} />
            </li>
          )
          })}
          {awardedArr.every(award => !award) && (
            <p>It takes 21 days to form a habit. Come back when you've completed a habit at least 21 times!</p>
          )}
      </div>
    )
  }
}

export default Awards;