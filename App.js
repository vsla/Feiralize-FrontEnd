import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import InitialRoute from './app/Cliente/routes/InitialRoute';
import firebase from 'firebase';
import { Provider } from "react-redux";
import store  from "./app/Cliente/redux/index";

class App extends React.Component {
  constructor(props){
    super(props)
    console.log('oi1')
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location)
    },(error) => {console.log(error)})
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCaWQJ4RcLMEmCvrQShlOIJ3t7dfiLmW3I",
      authDomain: "feiralizeapp-a4123.firebaseapp.com",
      databaseURL: "https://feiralizeapp-a4123.firebaseio.com",
      projectId: "feiralizeapp-a4123",
      storageBucket: "feiralizeapp-a4123.appspot.com",
      messagingSenderId: "314943024760"
    })
    }

  render() {
    console.ignoredYellowBox = ["Warning:"];
    return (
      // The app start calling InitialRoute in routes
      <Provider store={store}>
        <StatusBar backgroundColor="darkorange" />
        <InitialRoute />
      </Provider>
    );
  
   }
}
export default App;