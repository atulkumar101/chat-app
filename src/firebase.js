import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBITe5uDHR30Nb8qxAkB4UppYUNC-LN4pM",
  authDomain: "chat-app-84dbe.firebaseapp.com",
  databaseURL: "https://chat-app-84dbe.firebaseio.com",
  projectId: "chat-app-84dbe",
  storageBucket: "chat-app-84dbe.appspot.com",
  messagingSenderId: "993271258983"
};

export const firebaseApp = firebase.initializeApp(config);