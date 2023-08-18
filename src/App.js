import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pagesize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)




  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <LoadingBar
          color='red'
          height={1.5}
          // shadow={false}
          progress={progress}
        />

        <Routes>

          <Route exact path='/' element={<News setProgress={setProgress} key="general" apiKey={apiKey} pagesize={pagesize} country="in" category="general" />} />
          <Route exact path='/general' element={<News setProgress={setProgress} key="general" apiKey={apiKey} pagesize={pagesize} country="in" category="general" />} />
          <Route exact path='/DailyNewsApp' element={<News setProgress={setProgress} key="general" apiKey={apiKey} pagesize={pagesize} country="in" category="general" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" apiKey={apiKey} pagesize={pagesize} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pagesize={pagesize} country="in" category="entertainment" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" apiKey={apiKey} pagesize={pagesize} country="in" category="health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key={"science"} apiKey={apiKey} pagesize={pagesize} country="in" category="science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key={"sports"} apiKey={apiKey} pagesize={pagesize} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key={"technology"} apiKey={apiKey} pagesize={pagesize} country="in" category="technology" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key={"technology"} apiKey={apiKey} pagesize={pagesize} country="in" category="technology" />} />

        </Routes>
      </BrowserRouter>
    </div>
  )

}


export default App