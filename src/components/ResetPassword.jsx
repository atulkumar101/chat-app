import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';

class ResetPassword extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      error: {
        message:''
      }
    }
  }

  resetPassword = () => {
    var auth = firebaseApp.auth();
    var emailAddress = this.state.email;
    const { history } = this.props;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      console.log("email send successfully")
      history.push('/')
    }).catch(function(error) {
      console.log("reset password error: ", error);
    });
  }

  consoleProps() {
    console.log("this.props: ", this.props);
  }

  render() {
    return(
      <div className="form-inline">
        <h2>Reset Password</h2>
        <div className="form-group">
          <input 
            className="form-control"
            type="text"
            placeholder="email"
            onChange = { event => this.setState({ email: event.target.value }) }
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick = {this.resetPassword}
          >
            Reset Password
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick = { ()=> this.consoleProps() }
          >
            Console Props
          </button>
            
        </div>
        <div>
          {
            this.state.error.message
          }
        </div>
        <div>
          <Link to = {'/'}>Sign In Instead</Link>
        </div>
      </div>
    )
  }
}

export default ResetPassword;