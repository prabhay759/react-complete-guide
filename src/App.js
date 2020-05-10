import React, { useState, Component } from "react";
import styled from "styled-components";
import classes from "./App.css";
import Radium, { StyleRoot } from "radium"; // Used to add support for Sudo selector and media queries.
import Person, { person1 as Person1 } from "./Person/Person";

// Assignment purpose
// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput'

// Functional way of setting state.

// const [personsState, setPersonState] = useState({
//   persons: [
//     {
//       name: "Max",
//       age: 28,
//     },
//     {
//       name: "Menu",
//       age: 29,
//     },
//     {
//       name: "Stephanie",
//       age: 28,
//     },
//   ],
//   otherState: "Some other value",
// });

const StyledButton = styled.button`

`;

class app extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Max",
        age: 28,
      },
      {
        id: 2,
        name: "Menu",
        age: 29,
      },
      {
        id: 3,
        name: "Stephanie",
        age: 28,
      },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  // switchNamehandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       {
  //         name: newName,
  //         age: 28,
  //       },
  //       {
  //         name: "Menu",
  //         age: 29,
  //       },
  //       {
  //         name: "Stephanie",
  //         age: 27,
  //       },
  //     ],
  //   });
  // };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === personId;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // // Inline style.
    // // styling the button
    // // styling can be applied globally.
    // const style = {
    //   backgroundColor: "green",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   // Sudo selector, only works because of higher order component.
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let btnClass =  [classes.Button];
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id} // This is needed to set the unique key for each component being rendered.
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
      btnClass.push(classes.Red)
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <p>Hi, I am a React application</p>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass.join(' ')}
          onClick={this.togglePersonHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

// High order function
export default app;
