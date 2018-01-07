import React, { Component } from 'react';

import { Button} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import { Link } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';

import Navbar from '../components/Navbar.jsx';
import './css/css/contact.css';
import './css1/css/style.css';
class Contact extends Component {
  render() {
  	
    return (
<div>

<Navbar />

<nav>
      <ul className="nav">
        <li><a href="index.html" className="icon home"><span>Home</span></a></li>
        <li className="dropdown">
          <a href="index.html">Books</a>
          <ul>
            <li><a href="index.html">Books</a></li>
            <li><a href="index.html">eBooks</a></li>
            <li><a href="index.html">Books For Study</a></li>
            <li><a href="index.html">Audiobooks</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="index.html">Music, Games, Film &amp; TV</a>
          <ul className="large">
            <li><a href="index.html">Music</a></li>
            <li><a href="index.html">MP3 Downloads</a></li>
            <li><a href="index.html">Film &amp; TV</a></li>
            <li><a href="index.html">Blu-ray</a></li>
            <li><a href="index.html">PC &amp; Video Games</a></li>
          </ul>
        </li>
        <li className="active"><a href="index.html">Electronics</a></li>
        <li><a href="index.html">Computers &amp; Office</a></li>
      </ul>
    </nav>







<br></br>
<center><Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col smOffset={2} sm={6}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col smOffset={2} sm={6}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <center><Button bsStyle="success">Success</Button></center>
      </Col>
    </FormGroup>
  </Form></center>

  <ProgressBar active now={100} />

<form method="post" action="index.html" class="login">
    
      <p><label for="login">Email:</label>
      <input type="text" name="login" id="login" value="name@example.com"></input></p>
    

    <p>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" value="4815162342"></input>
    </p>

    <p className="login-submit">
      <button type="submit" class="login-button">Login</button>
    </p>

    <p className="forgot-password"><a href="index.html">Forgot your password?</a></p>
  </form>


  


</div>
    );
  }
}




export default Contact
