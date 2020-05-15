import React from "react";
import classes from "./person.css";
import Aux from '../../../hoc/Aux';
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

  render() {
    // Returning array of components
    // We can use high order component to wrap the componet when we have multiple component to return
    return [
      <Aux>
        {/* // <div className={classes.Person} style={this.style} > */}
        <p key='one' onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} year old
        </p>
        <p key='two'>{this.props.children}</p>
        <input key='three' type="text" onChange={this.props.changed} value={this.props.name} />
        {/* // </div> */}
      </Aux>

    ];
  }
};

export default Person;

// Styled components is another library we could use.

// export {person1};
