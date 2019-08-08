'use strict';

// console.log('App is running!!');

// var template = (
// <div>
//     <h1>Indecision App</h1>
//     <p>This is some info</p>
//     <ol>
//         <li>Item one</li>
//         <li>Item two</li>
//     </ol>
// </div>
// );

// var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);


var rootApp = document.getElementById('app');
var myTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Frederico Martini'
    ),
    React.createElement(
        'p',
        null,
        'Age: 30'
    ),
    React.createElement(
        'p',
        null,
        'Location: Pelotas'
    )
);

ReactDOM.render(myTemplate, rootApp);
