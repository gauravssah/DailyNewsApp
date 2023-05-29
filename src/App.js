// 809ff72368874be4ab94ce7845ea6708
// https://newsapi.org/v2/top-headlines?apiKey=809ff72368874be4ab94ce7845ea6708&q=cricket
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    )
  }
}


// export default App;
