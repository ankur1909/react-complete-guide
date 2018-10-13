import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("App.js inside constructor", props);
  }

  componentWillMount() {
    console.log("App.js inside componentWillMount");
  }

  componentDidMount() {
    console.log("App.js inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "Update app.js inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "Update app.js inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("update app.js inside componentdidupdate");
  }

  state = {
    persons: [
      { key: "asdsa", name: "manu", age: 29 },
      { key: "asdsa1", name: "Ankur", age: 25 },
      { key: "asdsa11", name: "Anand", age: 45 }
    ],
    showPersons: false
  };
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
    console.log("App.js inside render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangehandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
