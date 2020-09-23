import React, { Component } from "react";
import "./style.css";

class NavLink extends Component {

  render() {
    // let habitsClassName = 'nav-link';
    // let awardsClassName = 'nav-link awards-tab';

    // if (this.props.panel === 'habits') {
    //   habitsClassName += ' tab';
    //   awardsClassName += ' not-tab';
    // } else {
    //   habitsClassName += ' not-tab';
    //   awardsClassName += ' tab';
    // }

    // let shakeClassName = 'shake';
    // if (this.props.confetti) {
    //   shakeClassName += ' shake-bottom';
    // }

    return (
      <button className='nav-link' href="#" onClick={
        event => {
          event.preventDefault();
          this.props.setPanel(this.props.name);
        }
      }
      >
        <p>{this.props.name}</p>
      </button>
    )
  }
}

export default NavLink;