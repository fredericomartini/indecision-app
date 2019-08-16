'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: ['Option 1', 'Option 2', 'Option 3']
    };

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePickOne = _this.handlePickOne.bind(_this);
    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleDeleteOne = _this.handleDeleteOne.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteOne',
    value: function handleDeleteOne(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handlePickOne',
    value: function handlePickOne() {
      var options = this.state.options;

      var randomIndex = Math.floor(Math.random() * options.length);
      var random = options[randomIndex];
      console.log(random);
      alert(random);
    }
  }, {
    key: 'handleAddOne',
    value: function handleAddOne(option) {
      if (!option || option.trim() === '') {
        return 'Please, put a valid value';
      }
      if (this.state.options.indexOf(option.trim()) !== -1) {
        return 'Option already selected';
      }

      return this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [option.trim()])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hand os a computer.';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePickOne: this.handlePickOne }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOne: this.handleDeleteOne
        }),
        React.createElement(AddOption, { handleAddOne: this.handleAddOne })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.state = {
      error: undefined
    };

    _this2.handleAddOne = _this2.handleAddOne.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOne',
    value: function handleAddOne(event) {
      event.preventDefault();
      var option = event.target.elements.option;


      var error = this.props.handleAddOne(option.value);
      this.setState(function () {
        return { error: error };
      });
      option.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOne },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'p',
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { disabled: !props.hasOptions, onClick: props.handlePickOne },
      'What should I Do ?'
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'li',
      null,
      props.title,
      React.createElement(
        'button',
        {
          onClick: function onClick(event) {
            props.handleDeleteOne(props.title);
          }
        },
        ' ',
        'Remove'
      )
    )
  );
};

var Options = function Options(props) {
  var options = props.options;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Your Options',
      React.createElement(
        'button',
        { onClick: props.handleDeleteOptions },
        'Remove All'
      )
    ),
    options && React.createElement(
      'div',
      { className: 'options' },
      options.map(function (option, index) {
        return React.createElement(Option, { key: index, title: option, handleDeleteOne: props.handleDeleteOne });
      })
    )
  );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
