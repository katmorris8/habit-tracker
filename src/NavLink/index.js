import React, { Component } from "react";
import "./style.css";

class NavLink extends Component {

  render() {

    // let btnClassName = 'nav-link';
    // if (this.props.pannel === this.props.name) {
    //   btnClassName += ' tab';
    // } else {
    //   btnClassName += ' not-tab'; 
    // }

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