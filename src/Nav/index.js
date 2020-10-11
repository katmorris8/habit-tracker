import React, { Component } from "react";
import "./style.css";
import NavLink from '../NavLink';

class Nav extends Component {

  render() {
    const links = [
      {
        name: 'habits',
        icon: 'fas fa-home'
      },
      {
        name: 'create new',
        icon: 'fas fa-plus'
      },
      {
        name: 'awards',
        icon: 'far fa-star'
      }
    ]
    return (
      <nav className='nav-bar'>
        {
          links.map((link, index) => {
            return (
              <div key={`${link.name} ${index}`}>
                <NavLink
                  name={link.name}
                  setPanel={this.props.setPanel}
                  animate={this.props.animate && link.name === 'awards'}
                  icon={link.icon}
                  className={this.props.panel === link.name ? 'active-tab' : 'inactive-tab'}
                />
              </div>
            )
          })
        }
      </nav>
    )
  }
}

export default Nav;