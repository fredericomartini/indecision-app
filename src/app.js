class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Option 1', 'Option 2', 'Option 3'],
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOne = this.handlePickOne.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
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
    if (this.state.options.indexOf(option) !== -1) {
      return 'Option already selected';
    }

    return this.setState((prevState) => ({
      options: [...prevState.options, option],
    }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hand os a computer.';
    // const options = ;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePickOne={this.handlePickOne} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption handleAddOne={this.handleAddOne} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePickOne}>
          What should I Do ?
        </button>
      </div>
    );
  }
}

class AddOption extends React.Component {
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
    this.setState(() => ({
      error,
    }));
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

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.title}</li>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const { options } = this.props;
    return (
      <div>
        <p>
          Your Options
          {' '}
          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        </p>
        {options && (
          <div className="options">
            {options.map((option, index) => (
              <Option key={index} title={option} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
