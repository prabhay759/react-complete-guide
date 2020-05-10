import React, { useState } from 'react';
import './App.css';
import Person, {person1 as Person1} from './Person/Person';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const app = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Menu',
        age: 29
      },
      {
        name: 'Stephanie',
        age: 28
      }
    ],
    otherState: 'Some other value',
  })



  const switchNamehandler = (newName) => {
    setPersonState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: 'Menu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ],
      otherState: personsState.otherState,
    })
  }

  const nameChangedHandler = (event) => {
    setPersonState({
      persons: [
        {
          name: 'Maxmillian',
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ],
      otherState: personsState.otherState,
    })
  }

  // Inline style.
  // styling the button
  // styling can be applied globally.
  const style = {
    backgroundColor: 'green',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>I am a React developer</h1>
      <p>This is really working!</p>
      <button 
      onClick={switchNamehandler.bind(this, 'Prabhay a new name')} style={style}>Switch Name
      </button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}
        click={switchNamehandler.bind(this, 'Prabhay!!')} 
        changed={nameChangedHandler}>
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies are playing chess and Carrom!!</Person>
      {/* <Person1 age='Person1 component from person class' name={personsState.persons[2].name}></Person1> */}
    </div>
  );
}

export default app;
  