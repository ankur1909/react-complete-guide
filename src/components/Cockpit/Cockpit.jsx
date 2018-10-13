import React from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  let assignedClasses = [];
  let btnClass = [classes.Button];
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <>
      <h1>Hi,I'm a react app</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </>
  );
};

export default Cockpit;