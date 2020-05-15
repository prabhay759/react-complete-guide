import { getEFIDRedirectUrl } from '../../service/api';
import { HOME_PATH } from '../../config/constants';

export const IdleSignOut = (props) => {
  console.log("I have been invoked");
  const events = [
    // DOM events:

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

  export const SignOutRedirect = (props: any) => {
    console.log("Sending a SignOut request to the API...");
    destroy();
    console.log("Now invoking the props.history");
    props.history.push('/');
    window.location.assign(getEFIDRedirectUrl(HOME_PATH));
  }

  const setTime = () => {
    return setTimeout(SignOutRedirect, 15 * 1000);
  }

  let signOutTime = setTime();

  const resetTime = () => {
    console.log("I am from idleTimeout1 if you suspect me")
    clearTime();
    signOutTime = setTime();
  }

  const registerEvents = () => {
    events.forEach(event => window.addEventListener(event, resetTime));
  }

  const deRegisterEvents = () => {
    events.forEach(event => window.removeEventListener(event, resetTime));
  }

  const destroy = () => {
    console.log("I am destroying the world");
    deRegisterEvents();
    if (signOutTime) clearTime();
  }

  const clearTime = () => {
    clearTimeout(signOutTime);
  }

  registerEvents();

  return (null);
}

