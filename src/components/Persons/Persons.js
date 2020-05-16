import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import AuthContext from '../../context/authContext';

class Persons extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons.js GetDerivedStateFromProps');
  //   return state;
  // 

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(props, nextState) {
    console.log('Persons.js GetSnapshotbeforeUpdate');
    return { message: 'snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons.js Componentdidupdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  // No longer needed. You don't need it any more.

  // componentWillReceiveProps(nextProps, prevState) {
  //   console.log("Component Will receive props");
  // }

  // componentWillUpdate(nextProps, nextState) {
  // }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <AuthContext.Consumer>
          {(context) => <ErrorBoundary key={person.id}>
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.props.clicked.bind(index)}
              changed={(event) => this.props.changed(event, person.id)}
            // isAuth={this.props.isAuthenticated}
            ></Person>
          </ErrorBoundary>}
        </AuthContext.Consumer>
      );
    });
  }
};

export default Persons;
