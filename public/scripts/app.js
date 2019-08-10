'use strict';

var rootApp = document.getElementById('app');
var insertOption = function insertOption() {
    console.log('option');
};

var appConfig = {
    title: 'Indecision App!',
    options: ['NodeJS', 'Laravel']
};

var removeOption = function removeOption(event) {
    var name = event.target.name;

    if (name) {
        appConfig.options = appConfig.options.filter(function (value) {
            return value !== name;
        });
    }

    renderApp();
};

var getOptions = function getOptions() {
    if (appConfig.options) {
        return appConfig.options.map(function (option) {
            return React.createElement(
                'li',
                { key: option },
                option,
                React.createElement(
                    'button',
                    { style: { marginLeft: "10px" }, name: option, onClick: removeOption },
                    '-'
                )
            );
        });
    }
};

var addOption = function addOption(event) {
    event.preventDefault();
    var option = event.target.elements.option;


    if (!option.value || option.value.trim() === '') {
        return;
    }

    if (appConfig.options.includes(option.value)) {
        alert('Não é possível adicionar elementos duplicados!');
        return;
    }

    appConfig.options.push(option.value.trim());
    option.value = '';
    // Reloads the DOM
    renderApp();
};

var removeAll = function removeAll(event) {
    event.preventDefault();

    appConfig.options = [];

    // Reloads the DOM
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomOption = Math.floor(Math.random() * appConfig.options.length);
    console.log(randomOption);
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appConfig.title
        ),
        React.createElement(
            'p',
            null,
            appConfig.options.length ? 'Options:' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            'Total: ',
            appConfig.options.length
        ),
        React.createElement(
            'button',
            { disabled: !appConfig.options.length, onClick: onMakeDecision },
            'What should I do ?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            { className: 'my-options' },
            getOptions()
        ),
        React.createElement(
            'form',
            { onSubmit: addOption },
            React.createElement(
                'p',
                null,
                'Option:'
            ),
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add'
            )
        )
    );

    ReactDOM.render(template, rootApp);
};

renderApp();
