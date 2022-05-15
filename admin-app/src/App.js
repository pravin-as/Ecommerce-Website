import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Switch is replaced by Routes
import  Home  from './containers/Home';
import  Signin  from './containers/Signin';
import  Signup  from './containers/Signup';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Signin" element={<Signin/>} />
          <Route exact path="/Signup" element={<Signup/>} />
          {/* <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;