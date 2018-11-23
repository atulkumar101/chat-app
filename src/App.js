import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from './firebase';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error signing-in: ", errorMessage, errorCode);
    });
  }

  render() {
    return (
      <div className="App">
      <div className="form-inline">
      <h2>SignIn</h2>
      
      <div className="form-group">
        <input 
          className="form-control"
          type="text"
          placeholder="email"
          onChange = { event => this.setState({ email: event.target.value }) }
        />
        <input 
          className="form-control"
          type="password"
          placeholder="password"
          onChange = { event => this.setState({ password: event.target.value }) }
        />
        <button
          className="btn btn-primary"
          style={{margin: '5px'}}
          type="button"
          onClick = { ()=> this.signIn() }
        >
          Sign In
        </button>
        <button
          className="btn btn-primary"
          style={{margin: '5px'}}
          type="button"
        >
          <Link style={{color: 'white'}} to = {'/forgot'}> Forgot Password </Link>
        </button>
      </div>
      <div>{
        // this.state.error.message
      }</div>
      <div>
          <button
            className="btn btn-primary"
            style={{margin: '5px'}}
            type="button"
            coo
          >
            <Link style={{color: 'white'}} to = {'/signup'}> Sign Up Instead </Link>
          </button> 
      </div>
          {/* <div>
              <input 
                  type="checkbox"
                  id="mycheck"
                  onChange = { () => this.myCheck() }
              />
              <div>Show Password</div>
          </div> */}
          {/* <div>
          { this.check() }
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
