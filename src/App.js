// @flow
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

type Props = {
  className?: string
};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <Card
            title={'Header'}
            extra={<a href="/">more</a>}
            footer="test footer">
            Conten generated
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
