import React, { Component } from "react";
// import styled from "styled-components";
import classes from "./App.css";
// import Radium, { StyleRoot } from "radium"; // Used to add support for Sudo selector and media queries.
// import Person, { person1 as Person1 } from "../components/Persons/Person/Person";
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
// import IdleTimeOut from '../components/IdleTimeOut/IdleTimeout';
// import Timeout from '../components/Timeout/Timeout';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/authContext';
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
// })
class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.JS Constructor');
  }

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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("APP.js getDerivedStateFromProps", props, state);
    return true;
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 });
  };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === personId;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  componentDidMount() {
    console.log("APP:js componentDidMount");
  }

  componentDidUpdate() {
    console.log("App.JS componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('APP.JS Should component did update happens');

    return true;
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
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

    console.log("App.js Render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          ></Persons>
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }


    // Added default logg out functionality using react-idle-timeout.
    // For modal used react-boostrap/modal

    return (
      <div>
        {/* <IdleTimeOut {...this.props}></IdleTimeOut> */}
        {/* <Timeout /> */}
        <Aux classes={classes.App}>
          <button onClick={() => {
            this.setState(
              { showCockpit: false }
            );
          }}>Remove Cockpit</button>
          <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
            {this.state.showCockpit ?
              <Cockpit
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonHandler}
                login={this.loginHandler}
                title={this.appTitle} /> : null
            }
            {persons}
          </AuthContext.Provider>

        </Aux>
      </div >
    );
  }
}

// High order function
export default withClass(App, classes.App);
