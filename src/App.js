import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from './firebase';

import './App.css';
import usericon from './Assets/download.jpg';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
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
      <div style={{margin: '20px 20px 20px 20px'}} className="Box-shadow Align-center">
      <div>
        <h4>Sign In To Your Account</h4>
      </div>
      <div className="form-inline">
      <div className="form-group Margin-left">
      <div className="User-icon-big">
        <img src={usericon} alt="downloadimage" height="240px" width="240px" />
      </div>
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
            coo
          >
            <Link style={{color: 'white'}} to = {'/signup'}> Sign Up Instead </Link>
          </button> 
      </div>
      <div>{
        this.state.error.message
      }</div>
      <button
        className="btn btn-primary"
        style={{margin: '5px'}}
        type="button"
      >
        <Link style={{color: 'white'}} to = {'/forgot'}> Forgot Password </Link>
      </button>
      <div>
          
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
    </div>
    );
  }
}

export default App;
