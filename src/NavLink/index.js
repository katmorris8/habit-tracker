import React, { Component } from "react";
import "./style.css";

class NavLink extends Component {

  render() {
    return (
      <button className='nav-link' onClick={
        event => {
          event.preventDefault();
          this.props.setPanel(this.props.name);
        }
      }
      >
        <p className={this.props.animate ? 'shake-bottom' : ''}>{this.props.name}</p>
      </button>
    )
  }
}

export default NavLink;