import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {
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
        <button>
          <Link to = {'/forgot'}> Forgot Password </Link>
        </button>
      </div>
      <div>{
        // this.state.error.message
      }</div>
      <div>
          <button>
            <Link to = {'/signup'}> Sign Up Instead </Link>
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
