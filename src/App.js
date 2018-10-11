import React, { Component } from "react";
import classes from "./App.css";
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
    let persons = null;
    let btnClass = "";
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
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi,I'm a react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
