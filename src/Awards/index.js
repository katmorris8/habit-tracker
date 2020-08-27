import React, { Component } from "react";
import "./style.css";

class Awards extends Component {
  constructor() {
    super();
    this.state = {
      hasAwards: true
    }
  }

  componentDidMount() {
    console.log(this.state.hasAwards);
  }

  render() {
    return (
      <div className='awards' >
        {this.state.hasAwards && this.props.habits.map((habit, index) => {
            return (
              <div className='award' key={`${habit.text} ${index} award`}>
                {habit.count >= 21 && (
                  <div>
                    <div className='star' >
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
          {!this.state.hasAwards && (
            <p>It takes 21 days to form a habit. Come back when you've completed a habit at least 21 times!</p>
          )}
      </div>
    )
  }
}

export default Awards;