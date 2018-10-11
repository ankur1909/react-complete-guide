import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { key: "asdsa", name: "manu", age: 29 },
      { key: "asdsa1", name: "Ankur", age: 25 },
      { key: "asdsa11", name: "Anand", age: 45 }
    ],
    showPersons: false
  };
  // switchNameHandler = newname => {
  //   this.setState({
  //     persons: [
  //       { name: newname, age: 29 },
  //       { name: "Ankur", age: 25 },
  //       { name: "Anand", age: 78 }
  //     ]
  //   });
  // };
  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  nameChangehandler = (event, key) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.key === key;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.key}
                change={event => this.nameChangehandler(event, person.key)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>Hi,I'm a react app</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
