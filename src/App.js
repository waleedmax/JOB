import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Appbar, Button, Container } from 'muicss/react';
import './App.css';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Contact from './pages/Contact.jsx';
import Motion from './pages/Motion.jsx';
import styled from 'styled-components';
import Carousel from './pages/Carousel.jsx';
import Hide from './pages/Hide.jsx';
import Form from './pages/Form.jsx';
const Wrapper = styled.div`
`;

class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Contact" component={Contact}/>
           <Route path="/Motion" component={Motion}/>
           <Route path="/Carousel" component={Carousel}/>
           <Route path="/Hide" component={Hide}/>
           <Route path="/Form" component={Form}/>
        </div>
      </Router>
    );
  }
}




export default App;

