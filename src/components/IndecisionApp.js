import React, { Component } from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOne = this.handlePickOne.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleDeleteOne = this.handleDeleteOne.bind(this);
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({
          options,
        }));
      }
    } catch (error) {
      // Do nothing
    }
  }

  componentDidUpdate(prevOptions, prevState) {
    const {
      state: { options: newOptions },
    } = this;
    const { options: oldOptions } = prevState;

    // Options changed
    if (oldOptions.length !== newOptions.length) {
      localStorage.setItem('options', JSON.stringify(newOptions));
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOne(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  }

  handlePickOne() {
    const { options } = this.state;
    const randomIndex = Math.floor(Math.random() * options.length);
    const random = options[randomIndex];
    console.log(random);
    alert(random);
  }

  handleAddOne(option) {
    if (!option || option.trim() === '') {
      return 'Please, put a valid value';
    }
    if (this.state.options.indexOf(option.trim()) !== -1) {
      return 'Option already selected';
    }

    return this.setState((prevState) => ({
      options: [...prevState.options, option.trim()],
    }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hand os a computer.';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePickOne={this.handlePickOne} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOne={this.handleDeleteOne}
        />
        <AddOption handleAddOne={this.handleAddOne} />
      </div>
    );
  }
}
