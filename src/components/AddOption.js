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
      {this.state.error && <p className="add-option-error">{this.state.error}</p>}
      <form className="add-option" onSubmit={this.handleAddOne}>
        <input className="add-option__input" type="text" name="option" />
        <button className="button">Add Option</button>
      </form>
    </div>
  );
}
