import React, { Component } from "react";
import Counter from "./components/Counter";
import NameForm from "./components/NameForm";
import NameList from "./components/NameList";
import "./App.css";

class App extends Component {
  state = {
    names: ["lopun", "Jihun Ko"]
  };

  onInsert = name => {
    this.setState(({ names }) => ({ names: names.concat(name) }));
  };

  render() {
    const { names } = this.state;
    const { onInsert } = this;

    return (
      <div className="App">
        <Counter />
        <hr />
        <h1>이름 목록</h1>
        <NameForm onInsert={onInsert} />
        <NameList names={names} />
      </div>
    );
  }
}

export default App;
