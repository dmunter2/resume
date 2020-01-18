import React from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={AboutMe} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/resume' component={Resume} />

    </div>
  );
}

export default App;
