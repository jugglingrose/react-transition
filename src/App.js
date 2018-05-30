import React, { Component } from 'react';
import Content from './components/Content';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav><Menu /></nav>
          <main>
            <Content />
          </main>
      </div>
    );
  }
}

export default App;
