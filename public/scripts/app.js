'use strict';

var rootApp = document.getElementById('app');

var counter = 0;

var decreaseCounter = function decreaseCounter() {
    counter--;
    console.log('decrease');
    console.log(counter);
};

var increaseCounter = function increaseCounter() {
    counter++;
    console.log('increase');
    console.log(counter);
};

var reset = function reset() {
    counter = 0;
    console.log('reset');
    console.log(counter);
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Counter: ',
        counter
    ),
    React.createElement(
        'button',
        { id: 'decrease',
            className: 'button',
            onClick: decreaseCounter },
        '-1'
    ),
    React.createElement(
        'button',
        { id: 'increase',
            className: 'button',
            onClick: increaseCounter },
        '+1'
    ),
    React.createElement(
        'button',
        { id: 'reset',
            className: 'button',
            onClick: reset },
        'reset'
    )
);

ReactDOM.render(template, rootApp);
