import React, { Component } from "react";
import "./style.css";

class DeleteButton extends Component {

  render() {
    return (
      <div className='delete' >
        <button className='delete-btn' onClick={this.props.deleteHabit}>
          <div className='close'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </div>
        </button>
      </div>
    )
  }
}

export default DeleteButton;