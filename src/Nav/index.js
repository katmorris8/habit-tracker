import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

  render() {
    return (
      <nav>
        <a href="#" onClick={
          event => {
            event.preventDefault();
            this.props.setPanel('habits');
          }
        }
        >
          Habits
        </a>
        <a href="#" onClick={
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