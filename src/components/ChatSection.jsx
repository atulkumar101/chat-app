import React, {Component} from 'react';
import '../App.css';

class ChatSection extends Component{

  constructor(props){
    super(props);
    this.state = {
      userName: '',
    }
  }

  render(){
    return(
      <div className="App">
        <h4>All Chats</h4>
      </div>
    )
  }

}

export default ChatSection;