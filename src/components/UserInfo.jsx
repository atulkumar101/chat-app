import React, {Component} from 'react';
import '../App.css';
import { firebaseApp } from '../firebase';

class UserInfo extends Component{

  constructor(props){
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      friend_email_add: '',
    }
  }

  addFriend() {
    // console.log("add friend clicked");

  }

  componentWillMount() {
    const user = firebaseApp.auth().currentUser;
    this.setState({
      userName: user
    })
    // console.log("userName: ", this.state.userName, "user : ", user)
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      // console.log({
      //   // user
      // })
    })
    const user = firebaseApp.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  
    } 
    this.setState({
      userName: name
    })
    // console.log("user: ", user)
    if (user != null) {
      user.providerData.forEach(function (profile) {
        // console.log("Sign-in provider: " + profile.providerId);
        // console.log("  Provider-specific UID: " + profile.uid);
        // console.log("  Name: " + profile.displayName);
        // console.log("  Email: " + profile.email);
        // console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }

  render(){
    const {userEmail} = this.state;
    return(
      <div className="App">
        <div className="User-info">
          <h4>User Profile : {userEmail} </h4>
        </div>
        <div style={{display: 'inline-block', margin: '20px'}}>
          <input 
            className="form-control"
            style={{maxWidth: '200px'}}
            type="text"
            placeholder="enter email address"
            onChange = { event => this.setState({ friend_email_add: event.target.value }) }
          />
          <button
            className="btn btn-primary"
            style={{maxWidth: '100px', float: 'right'}}
            type="button"
            onClick = { ()=> this.addFriend() } 
          >
            Add Friend
          </button>
        </div>
      </div>
    )
  }

}

export default UserInfo;