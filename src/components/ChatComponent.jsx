import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import ChatSection from './ChatSection';
import UserInfo from './UserInfo';
import '../App.css'

class ChatComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      t_user : '',
    }
  }

  signOut() {
    // console.log('signing out');
    firebaseApp.auth().signOut();
    // console.log('sign out successful');
  }

  render(){
    return(
      <div className="App">
        <div style={{margin: '20px 20px 20px 20px', minHeight: '250px'}} className="Box-shadow Align-center">
          <button
            className="btn btn-primary"
            type="button"
            style={{float: 'right'}}
            onClick = { ()=> this.signOut() }
          >
            Sign Out
          </button>

          <UserInfo />
          <ChatSection />

        </div>
      </div>
    )
  }
}

export default ChatComponent;