import React, { Component } from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount = () => {
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
  };

  componentDidUpdate = (prevOptions, prevState) => {
    const {
      state: { options: newOptions },
    } = this;
    const { options: oldOptions } = prevState;

    // Options changed
    if (oldOptions.length !== newOptions.length) {
      localStorage.setItem('options', JSON.stringify(newOptions));
    }
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOne = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePickOne = () => {
    const { options } = this.state;
    const randomIndex = Math.floor(Math.random() * options.length);
    const random = options[randomIndex];

    this.setState(() => ({ selectedOption: random }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOne = (option) => {
    if (!option || option.trim() === '') {
      return 'Please, put a valid value';
    }
    const {
      state: { options },
    } = this;
    if (options.indexOf(option.trim()) !== -1) {
      return 'Option already selected';
    }

    return this.setState((prevState) => ({
      options: [...prevState.options, option.trim()],
    }));
  };

  render = () => {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hand os a computer.';
    const {
      state: { options, selectedOption },
    } = this;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={options.length > 0} handlePickOne={this.handlePickOne} />
          <div className="widget">
            <Options
              options={options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOne={this.handleDeleteOne}
            />
            <AddOption handleAddOne={this.handleAddOne} />
          </div>
        </div>
        <OptionModal
          selectedOption={selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  };
}
