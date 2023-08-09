import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 8;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route exact path='/' element={<News key="general" pagesize={this.pagesize} country="in" category="general" />} />
            <Route exact path='/general' element={<News key="general" pagesize={this.pagesize} country="in" category="general" />} />
            <Route exact path='/DailyNewsApp' element={<News key="general" pagesize={this.pagesize} country="in" category="general" />} />
            <Route exact path='/business' element={<News key="business" pagesize={this.pagesize} country="in" category="business" />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" />} />
            <Route exact path='/health' element={<News key="health" pagesize={this.pagesize} country="in" category="health" />} />
            <Route exact path='/science' element={<News key={"science"} pagesize={this.pagesize} country="in" category="science" />} />
            <Route exact path='/sports' element={<News key={"sports"} pagesize={this.pagesize} country="in" category="sports" />} />
            <Route exact path='/technology' element={<News key={"technology"} pagesize={this.pagesize} country="in" category="technology" />} />
            <Route exact path='/technology' element={<News key={"technology"} pagesize={this.pagesize} country="in" category="technology" />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

