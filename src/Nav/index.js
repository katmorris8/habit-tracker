import React, { Component } from "react";
import "./style.css";
import NavLink from '../NavLink';

class Nav extends Component {

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
      <nav className='nav-bar' >
        <NavLink 
          name={'habits'}
          setPanel={this.props.setPanel}
        />
        <NavLink
          name={'awards'}
          setPanel={this.props.setPanel}
        />
      </nav>
    )
  }
}

export default Nav;