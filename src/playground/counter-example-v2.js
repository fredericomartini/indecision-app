class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onReset = this.onReset.bind(this);
    this.state = {
      count: props.count ? props.count : 0,
    };
  }

  onIncrement() {
    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
  }

  onDecrement() {
    this.setState((prevstate) => ({
      count: prevstate.count - 1,
    }));
  }

  onReset() {
    this.setState(() => ({
      count: 0,
    }));
  }

  render() {
    return (
      <div>
        <h1>
          Counter:
          {this.state.count}
        </h1>
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onDecrement}>-1</button>
        <button onClick={this.onReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 333,
};

ReactDOM.render(<Counter count={10} />, document.getElementById('app'));
