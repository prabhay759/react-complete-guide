import React from 'react';

class Timeout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logginStatus: true,
    };

    this.events = [
      // Various DOM events:
      // https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types

      // Window events:
      "load",
      "scroll",

      // Mouse Events:
      // Browser Support https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
      "mousemove",
      "mousedown",
      "click",

      // Keyboard events:
      // Browser Support https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
      "keypress"
    ];

    this.logout = this.logout.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);

    this.events.forEach(event => window.addEventListener(event, this.resetTimeout));
    this.setTimeout();
  }

  clearTimeout() {
    if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
  }

  setTimeout() {
    this.logoutTimeout = setTimeout(this.logout, 5 * 1000);
  }

  resetTimeout() {
    console.log("I am here to verify inactivity of a user and logout as soon as user is inactive");
    this.clearTimeout();
    this.setTimeout();
  }

  logout() {
    console.log("Sending a logout request to the API...");
    this.destroy();
  }

  destroy() {
    console.log("I am destroying your world");
    this.clearTimeout();
    this.events.forEach(event => window.removeEventListener(event, this.resetTimeout));
  }

  render() {
    return (null);
  }
}

// const IdleTimeout = () => {
//   const events = [
//     // Various DOM events:
//     // https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types

//     // Window events:
//     "load",
//     "scroll",

//     // Mouse Events:
//     // Browser Support https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
//     "mousemove",
//     "mousedown",
//     "click",

//     // Keyboard events:
//     // Browser Support https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
//     "keypress"
//   ];

//   const logout = () => {
//     console.log("Sending a logout request to the API...");
//     destroy();
//   }

//   const setTime = () => {
//     return setTimeout(logout, 5 * 1000);
//   }

//   let logoutTime = setTime();

//   const resetTime = () => {
//     console.log("I am from idleTimeout1 if you suspect me")
//     clearTime();
//     logoutTime = setTime();
//   }

//   const registerEvents = () => {
//     events.forEach(event => window.addEventListener(event, resetTime));
//   }

//   const deRegisterEvents = () => {
//     events.forEach(event => window.removeEventListener(event, resetTime));
//   }

//   const destroy = () => {
//     console.log("I am destroying the world");
//     deRegisterEvents();
//     if (logoutTime) clearTime();
//   }

//   const clearTime = () => {
//     clearTimeout(logoutTime);
//   }

//   registerEvents();

//   return null;
// }

export default Timeout;
