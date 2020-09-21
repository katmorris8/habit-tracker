import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

  render() {
    let habitsClassName = 'nav-link';
    let awardsClassName = 'nav-link awards-tab';

    if (this.props.panel === 'habits') {
      habitsClassName += ' tab';
      awardsClassName += ' not-tab';
    } else {
      habitsClassName += ' not-tab';
      awardsClassName += ' tab';
    }

    let shakeClassName = 'shake';
    if (this.props.confetti) {
      shakeClassName += ' shake-bottom';
    }

    return (
      <nav className='nav-bar' >
        <button className={habitsClassName} onClick={
          event => {
            event.preventDefault();
            this.props.setPanel('habits');
          }
        }
        >
          Habits
        </button>
        <button className={awardsClassName} href="#" onClick={
          event => {
            event.preventDefault();
            this.props.setPanel('awards');
          }
        }
        >
          <p className={shakeClassName}>Awards</p>
        </button>
      </nav>
    )
  }
}

export default Nav;