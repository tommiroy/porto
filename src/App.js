
import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages';
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" exact elements={Home}/>
    <Route path="/about" exact elements={About}/>
    </Routes>
    </Router>
  );
}

export default App;
