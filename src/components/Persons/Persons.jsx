import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("Persons.js inside constructor", props);
  }

  componentWillMount() {
    console.log("Persons.js inside componentWillMount");
  }

  componentDidMount() {
    console.log("Persons.js inside componentDidMount");
  }

  componentWillReceiveProps(nextprops) {
    console.log(
      "Update persons.js inside componentWillReceiveProps",
      nextprops
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "Update persons.js inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "Update persons.js inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("update persons.js inside componentdidupdate");
  }

  render() {
    console.log("Persons.js inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={this.props.clicked.bind(this, index)}
          key={person.key}
          change={event => this.props.changed(event, person.key)}
        />
      );
    });
  }
}

export default Persons;
