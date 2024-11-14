import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  // c='Jhon';

  pageSize = 6;

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      // <div>
      //   Hello my first class based component {this.c}
      //Key is given for mounting in such a way so that it can be remounted as well 
      // </div>
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
           
          />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path='/sports' element={<News  setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />

            <Route exact path='/entertainment' element={<News  setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path='/general' element={<News  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path='/health' element={<News  setProgress={this.setProgress} key="buisness" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path='/science' element={<News  setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path='/technology' element={<News  setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="technology" />} />
            <Route exact path='/buisness' element={<News  setProgress={this.setProgress} key="buisness" pageSize={this.pageSize} country="us" category="business" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}




//rcc react class based component 
