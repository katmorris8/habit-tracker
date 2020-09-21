import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

  render() {
    let shakeClassName = 'shake';
    if (this.props.confetti) {
      shakeClassName += ' shake-bottom';
    }
    return (
      <nav className='nav-bar' >
        <button className='nav-link tab' onClick={
          event => {
            event.preventDefault();
            this.props.setPanel('habits');
          }
        }
        >
          Habits
        </button>
        <button className='nav-link not-tab awards-tab' href="#" onClick={
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