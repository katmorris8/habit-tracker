import React, { Component } from "react";
import "./style.css";
import NavLink from '../NavLink';

class Nav extends Component {

  render() {
    const links = ['habits', 'create new', 'awards'];
    return (
      <nav className='nav-bar'>
        {
          links.map((name, index) => {
            return(
            <div 
              key={`${name} ${index}`} 
              className={this.props.panel === name ? 'active-tab' : 'inactive-tab'}
            >
              <NavLink 
                name={name}
                setPanel={this.props.setPanel}
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