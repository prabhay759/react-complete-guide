import React from "react";
import classes from "./person.css";
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext';

// import styled from "styled-components";

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 5px 8px rgb(204, 204, 204);
//   padding: 16px;
//   text-align: center;
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

class Person extends React.Component {
  style = {
    "@media (minWidth: 500px)": {
      width: "450px",
    },
  };

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }


  static contextType = AuthContext;

  componentDidMount() {
    // Selects the last input and sets the focus.
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log('Person.JS, Component did mount has context', this.context.authenticated);
  }

  render() {
    // Returning array of components
    // We can use high order component to wrap the componet when we have multiple component to return
    return [
      // Could be used React.Fragment instead. Work like the same as written in Aux.
      <Aux>
        {/* // <div className={classes.Person} style={this.style} > */}
        {/* <AuthContext.Consumer>
          {context => context.authenticated ? <p>Authenticated</p> : <p>Please log in...</p>}
        </AuthContext.Consumer> */}
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in...</p>}
        <p key='one' onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} year old
        </p>
        <p key='two'>{this.props.children}</p>
        <input key='three' type="text" onChange={this.props.changed} value={this.props.name}
          ref={this.inputElementRef}
        // ref={(inputEl) => { this.inputElement = inputEl; }}
        />
        {/* // </div> */}
      </Aux>

    ];
  }
};

Person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
};

export default withClass(Person, classes.Person);

// Styled components is another library we could use.

// export {person1};
