import React from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
 
function App() {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={AboutMe} />
      <Route exact path='/contact' component={Contact} />

    </div>
  );
}

export default App;
