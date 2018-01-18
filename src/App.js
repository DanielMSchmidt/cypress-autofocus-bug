import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";

class FieldAutofocus extends Component {
  field = null;

  componentDidMount() {
    this.field.focus();
  }

  render() {
    return <input ref={input => (this.field = input)} />;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>vvv This should auto-focus vvv</h2>
        </div>
        <FieldAutofocus />
      </div>
    );
  }
}

export default App;
