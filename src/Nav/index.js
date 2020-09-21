import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

  render() {
    let className = 'nav-link'
    if (this.props.confetti) {
      className += ' shake-bottom';
    }
    return (
      <nav className='nav-bar' >
        <button className='nav-link' onClick={
          event => {
            event.preventDefault();
            this.props.setPanel('habits');
          }
        }
        >
          Habits
        </button>
        <button className={className} href="#" onClick={
          event => {
            event.preventDefault();
            this.props.setPanel('awards');
          }
        }
        >
          Awards
        </button>
      </nav>
    )
  }
}

export default Nav;