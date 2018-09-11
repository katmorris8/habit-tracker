import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

  render() {
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
        <button className='nav-link' href="#" onClick={
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