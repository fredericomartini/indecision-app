class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Option 1', 'Option 2', 'Option 3'],
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOne = this.handlePickOne.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleDeleteOne = this.handleDeleteOne.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevOptions, prevState) {
    console.log(prevOptions);
    console.log(prevState);
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

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
  </div>
);

const Action = (props) => (
  <div>
    <button disabled={!props.hasOptions} onClick={props.handlePickOne}>
      What should I Do ?
    </button>
  </div>
);

const Option = (props) => (
  <div>
    <li>
      {props.title}
      <button
        onClick={(event) => {
          props.handleDeleteOne(props.title);
        }}
      >
        {' '}
        Remove
      </button>
    </li>
  </div>
);

const Options = (props) => {
  const { options } = props;
  return (
    <div>
      <p>
        Your Options
        <button onClick={props.handleDeleteOptions}>Remove All</button>
      </p>
      {options && (
        <div className="options">
          {options.map((option, index) => (
            <Option key={index} title={option} handleDeleteOne={props.handleDeleteOne} />
          ))}
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
