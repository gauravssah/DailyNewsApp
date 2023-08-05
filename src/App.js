import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  appName = "Dailynews"
  render() {
    return (
      <div>
        hello {this.appName}
      </div>
    )
  }
}

