import React from 'react';
import IdleTimer from 'react-idle-timer';
import ModalPopup from '../ModalPopup/ModalPopup';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../App.css'

class IdleTimeOut extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timeout: 1000 * 5 * 1, // 5 Seconds timeout
      showModal: false,
      userLoggedIn: false,
      isTimedOut: false
    };

    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  _onAction(e) {
    console.log('user did something', e);
    this.setState({ isTimedOut: false });
  }

  _onActive(e) {
    console.log('user is active', e);
    this.setState({ isTimedOut: false });
  }

  _onIdle(e) {
    console.log('user is idle', e);
    const isTimedOut = this.state.isTimedOut;
    if (isTimedOut) {
      this.props.history.push('/');
    } else {
      this.setState({ showModal: true });
      this.idleTimer.reset();
      this.setState({ isTimedOut: true });
    }

  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleLogout() {
    this.setState({ showModal: false });
    console.log("You have been logged out, please refresh your page");
    this.props.history.push('/');
  }

  render() {
    // const { match } = this.props
    return (
      <div className="">
        <IdleTimer
          ref={ref => { this.idleTimer = ref; }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.timeout}
        />
        <ModalPopup
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }

}

//  IdleTimeOut.propTypes = {
//      match: PropTypes.any.isRequired,
//      history: PropTypes.func.isRequired
//  }

export default IdleTimeOut;
