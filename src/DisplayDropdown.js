import React, { Component } from 'react';

class DisplayDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 'Select Display',
      statusValue: 'Select Status',
      priorityValue: 'Select Priority',
    };
  }

  handleDisplayChange = (event) => {
    this.setState({ displayValue: event.target.value });
  };

  handleStatusChange = (event) => {
    this.setState({ statusValue: event.target.value });
  };

  handlePriorityChange = (event) => {
    this.setState({ priorityValue: event.target.value });
  };

  render() {
    return (
      <div className='drop'>
        <label className='dropItem' htmlFor="displayDropdown"><img height={"15px"} src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zSOFlVlwiyH2JJrtMjGE-p8q9pJXcpGeuQ&usqp=CAU"/></label>
        <select  className='option'
          id="displayDropdown"
          value={this.state.displayValue}
          onChange={this.handleDisplayChange}
        >
          <option className='option' value="Select Display">Display</option>
          <option className='option' value="Status">Status</option>
          <option className='option' value="Priority">Priority</option>
        </select>

        {this.state.displayValue === 'Status' && (
          <div>
            <label htmlFor="statusDropdown">Status:</label>
            <select
              id="statusDropdown"
              value={this.state.statusValue}
              onChange={this.handleStatusChange}
            >
              <option value="Select Status">Select Status</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Backlog">Cancelled</option>
            </select>
          </div>
        )}

        {this.state.displayValue === 'Priority' && (
          <div>
            <label htmlFor="priorityDropdown">Priority:</label>
            <select
              id="priorityDropdown"
              value={this.state.priorityValue}
              onChange={this.handlePriorityChange}
            >
              <option value="Select Priority">Select Priority</option>
              <option value="0">0 Priority</option>
              <option value="1">1 Priority</option>
              <option value="2">2 Priority</option>
              <option value="3">3 Priority</option>
              <option value="4">4 Priority</option>
            </select>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayDropdown;
