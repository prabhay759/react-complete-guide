import React from "react";
import classes from "./person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 5px 8px rgb(204, 204, 204);
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  const style = {
    "@media (minWidth: 500px)": {
      width: "450px",
    },
  };

  return (
      <div className={classes.Person} style={style}>
        <p onClick={props.click}>
          I am {props.name} and I am {props.age} year old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
  );
};

// const person1 = (props) => {
//   return (
//     <div>
//       <p>I am and I am {props.age} year old</p>
//       <p onClick={props.Click}>{props.Children}</p>
//     </div>
//   )
// }

// Class based react component.
// class person extends Component {
//   render() {
//     return <p>I am a {this.props.name} and I am {this.props.age} year old</p>
//   }
// }

// Styled components is another library we could use.
export default person;
// export {person1};
