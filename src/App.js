import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import "./App.css";

export class App extends Component {
  // NewsDB

  render() {
    return (
      <div>  
      <Navbar/>
      {/* <h1>NewsCB</h1>  */}
      <News/>
      </div>
    )
  }
}

export default App;