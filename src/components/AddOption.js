import React, { Component } from 'react';

export default class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };

    this.handleAddOne = this.handleAddOne.bind(this);
  }

  handleAddOne(event) {
    event.preventDefault();
    const {
      target: {
        elements: { option },
      },
    } = event;

    const error = this.props.handleAddOne(option.value);
    this.setState(() => ({ error }));
    option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOne}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
