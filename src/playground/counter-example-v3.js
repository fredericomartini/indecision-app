class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onReset = this.onReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  /**
   * Executando sempre antes de renderizar
   */
  componentDidMount() {
    const countFromLocal = localStorage.getItem('count');
    const count = !isNaN(parseInt(countFromLocal, 10)) ? parseInt(countFromLocal, 10) : 0;
    if (count !== 0) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevOptions, prevState) {
    const { count: oldCount } = prevState;
    const {
      state: { count: newCount },
    } = this;
    console.log('didUpdate...');
    if (oldCount !== newCount) {
      console.log('Performar o update!...');
      localStorage.setItem('count', newCount);
    }
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

ReactDOM.render(<Counter />, document.getElementById('app'));
