import React, { Component } from "react";
import "./style.css";

class Awards extends Component {
  render() {
    const awardedArr = this.props.habits.map(habit => habit.awarded)
    
    return (
      <div className='awards' >
        {awardedArr.some(award => award) && this.props.habits.map((habit, index) => {
            return (
              <div className='award' key={`${habit.text} ${index} award`}>
                {habit.awarded && (
                  <div>
                    <div className='star'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                    <p>{habit.text}</p>
                  </div>
                )}
              </div>
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