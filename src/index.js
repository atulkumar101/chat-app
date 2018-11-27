import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { firebaseApp } from './firebase';
import { logUser } from './actions';

import './index.css';
import App from './App';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';

import combineReducers from './reducers';
import ChatComponent from './components/ChatComponent';

const store = createStore(combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class RouteApp extends React.Component{
  componentDidMount(){
    firebaseApp.auth().onAuthStateChanged( user => {
      if(user) {
          console.log('user has signed in/up', user);
          // const { email } = user;
          // store.dispatch(logUser(email));
          this.props.history.push('/chats')
          // window.reload();
      } else {
          this.props.history.push('/')
          // console.log('user has signed out or still needs to sign in');
      }
    } )
  }
  
  render(){
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/chats" component={ChatComponent} />
        <Route exact path="/resetpassword" component={ResetPassword} />
      </Switch>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={RouteApp} />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
