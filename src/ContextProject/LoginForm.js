import React, { Component, Fragment } from 'react';
import { Consumer } from './MyContext';

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <Consumer>
        {value => {
          const { viewer } = value.state;
          const { logIn, logOut } = value.actions;
          return viewer ? (
            <Fragment>
              <h3>Logged in as: {viewer}</h3>
              <button onClick={logOut}>Log Out</button>
            </Fragment>
          ) : (
            <Fragment>
              <input 
                placeholder="Name Please!"
                ref={r => (this.inputRef = r)}              
              />
              <button
                type="submit"
                onClick={() => {
                  logIn(this.inputRef.value);
                }}
              >
                Log in
              </button>
            </Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default LoginForm;