class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((previousState) => ({
      visibility: !previousState.visibility,
    }));
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some defails you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle title="VisibilityToggle" />, document.getElementById('app'));
