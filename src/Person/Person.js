import React from "react";
import "./person.css";
import Radium from "radium";

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };

  return (
    <div className="Person" style={style}>
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
export default Radium(person);
// export {person1};
