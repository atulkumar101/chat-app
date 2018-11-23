import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import '../App.css'

class ChatComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      t_user : '',
    }
  }

  signOut() {
    console.log('signing out');
    firebaseApp.auth().signOut();
    console.log('sign out successful');
  }

  render(){
    return(
      <div className="App">
        <button
          className="btn btn-primary"
          type="button"
          style={{float: 'right'}}
          onClick = { ()=> this.signOut() }
        >
          Sign Out
        </button>
      </div>
    )
  }
}

export default ChatComponent;