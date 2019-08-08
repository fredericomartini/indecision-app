'use strict';

var rootApp = document.getElementById('app');

var user = {
    name: 'Frederico Martini',
    age: 30,
    location: 'Pelotas'
};

var getLocation = function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : null;
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render(template, rootApp);
