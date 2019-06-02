import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import InitialRoute from './app/Cliente/routes/InitialRoute';
import store from './app/Cliente/redux/index';
import Authentication from './app/Cliente/pages/Authentication';
import RegisterAccount from './app/Cliente/pages/RegisterAccount';
import ForgotPassword from './app/Cliente/pages/ForgotPassword';

class App extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
    }, (error) => { console.log(error); });
  }

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCaWQJ4RcLMEmCvrQShlOIJ3t7dfiLmW3I',
        authDomain: 'feiralizeapp-a4123.firebaseapp.com',
        databaseURL: 'https://feiralizeapp-a4123.firebaseio.com',
        projectId: 'feiralizeapp-a4123',
        storageBucket: 'feiralizeapp-a4123.appspot.com',
        messagingSenderId: '314943024760'
      });
    } else {
      firebase.app();
    } 
}

  render() {
    console.disableYellowBox = true;
    return (
      // The app start calling InitialRoute in routes
      <Provider store={store}>
        <StatusBar backgroundColor="darkorange" />
        <ForgotPassword />
      </Provider>
    );
   }
}
export default App;
// <InitialRoute />
