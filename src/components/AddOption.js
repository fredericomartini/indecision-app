import React, { Component } from 'react';

export default class AddOption extends Component {
  state = {
    error: undefined,
  };

  handleAddOne = (event) => {
    event.preventDefault();
    const {
      target: {
        elements: { option },
      },
    } = event;

    const error = this.props.handleAddOne(option.value);
    this.setState(() => ({ error }));
    option.value = '';
  };

  render = () => (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOne}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
}
