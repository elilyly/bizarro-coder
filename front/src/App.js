import React, { Component } from 'react';
import ProfileCard from './ProfileCard.js';
import NavBar from './NavBar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProfileCard />
      </div>
    )
  }
}

export default App;
