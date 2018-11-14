import React, { Component } from 'react';
import Nav from './Nav';
import { Provider, Consumer } from './MyContext';



class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header>
            <Consumer>
              {({ state: {viewer} }) => (
                <h1>{viewer ? `Welcome ${viewer}` : 'Log out!'}</h1>
              )}
            </Consumer>
          </header>
          <Nav />
        </div>
      </Provider>
    );
  }
}

export default App;
