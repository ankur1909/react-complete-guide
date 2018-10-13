import React, { Component } from "react";
import classes from "./Person.css";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("Person.js inside constructor", props);
  }

  componentWillMount() {
    console.log("Person.js inside componentWillMount");
  }

  componentDidMount() {
    console.log("Person.js inside componentDidMount");
  }
  render() {
    console.log("Person.js inside render");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
