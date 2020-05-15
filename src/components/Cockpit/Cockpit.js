import React, { useEffect } from 'react';
import Classes from './Cockpit.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('Cockpit.js, UseEffect');
    // Making HTTP Request
    // Component did mount and Component did update combined hooks in functional component.
    // const timer = setTimeout(() => { alert('Fetching the data from the cloud'); }, 1000);
    return () => {
      // clearTimeout(timer);
      console.log("Cockpit.Js cleanup work in useEffect");
    };


  }, []); // props.persons

  // Empty array means it will run for the first time to fetch the data.
  // Multiple useEffect could be used to control different behaviors.
  // Adding the second params will look for persons change to perform some actions.


  useEffect(() => {
    console.log("Cockpit.js Second useEffect");
    return () => console.log("Cockpit.js Some cleanup work from second use effect");
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = Classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(Classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(Classes.bold);
  }

  return (
    <div className={Classes.Cockpit}>
      <p>{props.title} Something wrong here, my value is not getting rendered</p>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons  </button>
    </div>
  );
};

export default React.memo(Cockpit);
