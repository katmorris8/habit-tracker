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
                name={name}
                setPanel={this.props.setPanel}
                panel={this.props.panel}
                animate={this.props.animate && name === 'awards'}
              />
            </div>
          )})
        }
      </nav>
    )
  }
}

export default Nav;