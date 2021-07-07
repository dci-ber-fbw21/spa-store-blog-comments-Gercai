import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';

import Nexus from "./components/nexus";

function App() {
  return (
    <div className="container"> 
    <Router>  
    <Nexus/>
    </Router>
    </div>
  );
}

export default App;
