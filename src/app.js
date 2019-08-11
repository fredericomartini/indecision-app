class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hand os a computer.";
    const options = ["Option 1", "Option 2", "Option 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <button onClick={this.onHandleClick}>What should I Do ?</button>
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    if (!option) {
      return false;
    }
    alert(option);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
  constructor(props) {
    super(props);
    this.options = props.options;
    this.removeAll = this.removeAll.bind(this);
  }

  removeAll() {
    this.options = [];
    this.render();
  }

  render() {
    const options = this.options;

    return (
      <div>
        <p>
          Your Options <button onClick={this.removeAll}>Remove All</button>
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
