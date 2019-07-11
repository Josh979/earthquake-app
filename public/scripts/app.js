'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// You can use .bind(OBJECT) to bind ~this~ to an object, as well as any other object to that object
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//
// While we cannot use "state" inside of our stateless functional component, we can use "props"
// These stateless functional components are faster than class based components
//
// JSX - Javascript XML
// When using JSX you may only have one root element in the template (a wrapper).
// Any other elements must be located inside the wrapper element
//
// --Conditional Rendering--
// Only expressions (not statements) can be used in JSX rendering
// This means things such as if statements cannot be used, however
// The following 3 methods can be used for conditional rendering:
// 1. If statements that are contained within a function - by calling the function in an expression
// 2. Ternary operators
// 3. Logical && operator
//
// If an expression resolves to a boolean, null or undefined, it will not show up/render
// In other words, in JSX we can use strings numbers and arrays, but can't render booleans and objects aren't supported
//
// --const and let Variables--
// var based variables are function scoped
// let and const are block level scope
// let variables can be reassigned, const variables cannot be reassigned.
// A good strategy is to use const for everything initially and then switch things to let as needed.
//
// -- Local Storage --
// Only works with STRING data.
// We can use JSON.stringify and JSON.parse to work with this
//
// In es6 arrow functions the "arguments" object and the "this" keyword are no longer bound.
// Arrow functions instead use the this keyword of the context they were created in.
//
// -- .forEach vs .map --
// forEach lets you get each item, map lets you transform each item
//
// -- JSX Attributes --
// class attribute is not allowed in JSX (because class is a javascript reserved word), you must instead use the className attribute
// Other attribute differences can be found here: https://reactjs.org/docs/dom-elements.html
//
// -- Components --
// Components can easily be nested inside of other components.
// Component props are read only. You can pass only downward to children, you cannot pass back up to parent
// This requires you to have to use a work around (such as calling parent functions)
// When a parent passes down new props to a child component, the child component will be re-rendered
// Components can either be class based or can be stateless functional components
//
// -- Stateless Functional Components --
// These components are faster than class based components, because they have far less overhead
// Component Lifecycle Methods cannot be used in stateless functional components
//
// -- Lifecycle Methods --
// https://reactjs.org/docs/state-and-lifecycle.html
// https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
//
// -- Objects --
// When storing an object's function into a variable, you lose the context of that object, and access to 'this'
// You can use .bind(object) to set the 'this' context to an object (the same object, or a different one)
// OR in react, you can override
//
// -- Props --
// Props come from above (parents).
// Props can't be changed by the component itself
//
// -- States --
// Do not pass an object to setState, this is the old way of doing things, instead pass it a function.
// States are defined in the component itself, and can be changed by the component itself.
// implicit return syntax is below
// ex: this.setState(() => ({ options : [] }));
//

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        // Do nothing
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saving data');
      }
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Please enter a valid value!';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Option already exists!';
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer.';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
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
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What Should I Do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started!'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    }),
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    'Option: ',
    props.optionText,
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'Remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.option.value = '';
      }
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
          { onSubmit: this.handleAddOption },
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

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
