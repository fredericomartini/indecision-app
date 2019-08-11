class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hand os a computer.';
        const options =  ['Option 1', 'Option 2', 'Option 3'];
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
    render() {
        return (
            <div>
                <button>What should I Do ?</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"></input>
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
        const options = this.props.options;

        return (
            <div>
                <p>Your Options <button>Remove All</button></p>
                {options && (
                    <div className='options'>
                        {options.map((option, index) => {
                            return <Option key={index} title={option} />
                        })}
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));