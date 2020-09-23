import React, { Component } from "react";
import "./style.css";
import NavLink from '../NavLink';

class Nav extends Component {

  render() {
    const links = ['habits', 'awards'];
    return (
      <nav className='nav-bar'>
        {
          links.map((name, index) => {
            return(
            <div key={`${name} ${index}`}>
              <NavLink 
                key={name + index}
                name={name}
                setPanel={this.props.setPanel}
                panel={this.props.panel}
                confetti={this.props.confetti}
              />
            </div>
          )})
        }
      </nav>
    )
  }
}

export default Nav;