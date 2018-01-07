import React, { Component } from 'react';
const { Component, createElement, PropTypes } = React;
const source = `<div className="container">
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            {{#if user}}
              <li role="presentation"><a href="/">Dashboard</a></li>
              <li role="presentation"><a href="/users/logout">Logout</a></li>
            {{else}}
              <li role="presentation"><a href="/users/login">Login</a></li>
              <li role="presentation"><a href="/users/register">Register</a></li>
            {{/if}}
          </ul>
        </nav>
        <h3 class="text-muted">LoginApp</h3>
      </div>


      <div class="row">
        <div class="col-lg-12">
          {{#if success_msg}}
            <div class="alert alert-success">{{success_msg}}</div>
          {{/if}}

          {{#if error_msg}}
            <div class="alert alert-danger">{{error_msg}}</div>
          {{/if}}

          {{#if error}}
            <div class="alert alert-danger">{{error}}</div>
          {{/if}}
          
          {{{body}}}
        </div>

        
      </div>

      <footer class="footer">
        <p>&copy; 2015 LoginApp, Inc.</p>
      </footer>

    </div>`;
    const template  =  Handlebars.compile( source );

class layout extends Component {
  render() {
return (
<div className="container" dangerouslySetInnerHTML={{ __html: template( this.props ) }} />

 



  	    );
  }
}




export default layout