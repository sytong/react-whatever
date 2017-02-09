import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Link to='/'>Home</Link>
        &nbsp;
        <Link to='/about'>About</Link>

        { children }
      </div>
    );
  }
}
