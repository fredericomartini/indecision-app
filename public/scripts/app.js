'use strict';

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'React Components'
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
