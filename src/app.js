class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div style={{  "backgroundColor": "#322b38",
                    "padding": "10px",
                    "marginBottom": "30px",
                }} >
                <h1>Indecision</h1>
                <p>Put your life in the hand os a computer.</p>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div style={{  "backgroundColor": "#6b2ca3",
                    "padding": "10px",
                    "marginBottom": "10px",
                    "width": "400px"
                }} >
                <button>What should I Do ?</button>
            </div>
        );
    }
}


class Option extends React.Component {
    removeOption(event) {
        event.preventDefault();
        console.log(`Remover ${event.target}`)
    };

    render() {
        return (
            <div>
                <li>Option! <button onClick={this.removeOption}>Remove</button></li>
                <span>---------------------------</span>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div style={{  "backgroundColor": "#464b5e",
                    "padding": "10px",
                    "marginBottom": "10px",
                    "width": "400px"
                }} >
                <p>Your Options <button>Remove All</button></p>
                <ol>
                    <Option />
                    <Option />
                    <Option />
                </ol>
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
    </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));