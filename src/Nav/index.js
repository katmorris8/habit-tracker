import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

  render() {
    return (
      <nav className='nav-bar' >
        <a className='nav-link' href="#" onClick={
          event => {
            event.preventDefault();
            this.props.setPanel('habits');
          }
        }
        >
          Habits
        </a>
        <a className='nav-link' href="#" onClick={
          event => {
            event.preventDefault();
            this.props.setPanel('awards');
          }
        }
        >
          Awards
        </a>
      </nav>
    )
  }
}

export default Nav;