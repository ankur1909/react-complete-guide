import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "manu", age: 29 },
      { name: "Ankur", age: 25 },
      { name: "Anand", age: 45 }
    ]
  };
  switchNameHandler = newname => {
    this.setState({
      persons: [
        { name: newname, age: 29 },
        { name: "Ankur", age: 25 },
        { name: "Anand", age: 78 }
      ]
    });
  };

  nameChangehandler = event => {
    this.setState({
      persons: [
        { name: "newname", age: 29 },
        { name: event.target.value, age: 25 },
        { name: "Anand", age: 78 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi,I'm a react app</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximilian2")}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Indu")}
          change={this.nameChangehandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
