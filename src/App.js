import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Nexus from "./components/nexus";

function App() {
  return (
    <div className="App"> 
    <Router>  
    <Nexus/>
    </Router>
    </div>
  );
}

export default App;
