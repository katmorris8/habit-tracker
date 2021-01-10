import React, { Component } from "react";
import "./style.css";

class NavLink extends Component {

  render() {
    return (
      <button className='nav-link' onClick={() => this.props.setPanel(this.props.name)}>
        <p className={`${this.props.animate ? 'shake-bottom' : ''} ${this.props.className}`}>
          <i className={this.props.icon}></i>
          <br></br>
          {this.props.name}
        </p>
      </button>
    )
  }
}

export default NavLink;