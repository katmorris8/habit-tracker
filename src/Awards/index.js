import React, { Component } from "react";
import "./style.css";
import Award from '../Award';

class Awards extends Component {
  render() {
    const awarded = this.props.habits.map(habit => habit.awarded);
    const awardedArr = this.props.habits.filter(habit => habit.awarded);
    
    return (
      <div className='awards' >
        {awarded.some(award => award) && awardedArr.map((habit, index) => {
          return(
            <li key={`${habit.text} ${index} award`} className="award">
              <Award habit={habit} />
            </li>
          )
          })}
          {awarded.every(award => !award) && (
            <p className='empty-awards-text'>It takes 21 days to form a habit. Come back when you've completed a habit at least 21 times!</p>
          )}
      </div>
    )
  }
}

export default Awards;