import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import InitialRoute from './app/routes/InitialRoute';
import firebase from 'firebase';
import { Provider } from "react-redux";
import store  from "./app/redux/index";
class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCnVkAQB2YitsCh2m9Rs2LbjGCdyhE5cEI",
      authDomain: "authentication-2fd09.firebaseapp.com",
      databaseURL: "https://authentication-2fd09.firebaseio.com",
      projectId: "authentication-2fd09",
      storageBucket: "authentication-2fd09.appspot.com",
      messagingSenderId: "518915834703"
    })
  }
  render() {
    return (
      // The app start calling InitialRoute in routes
      <Provider store={store}>
        <StatusBar backgroundColor="darkorange" barStyle="light-content" />
        <InitialRoute />
      </Provider>
    );
  
   }
}
export default App;