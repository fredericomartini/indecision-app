import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldStyle {
  constructor() {
    this.name = 'Fred old Constructor';
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi. ${this.name}`;
  }
}
const oldStyle = new OldStyle();
const { getGreeting } = oldStyle;
console.log(getGreeting());

class NewStyle {
  name = 'Fred new Style';

  getGreeting = () => `Hi. ${this.name}`;
}

const newStyle = new NewStyle();
const newGetGreeting = newStyle.getGreeting;
console.log(newGetGreeting());
