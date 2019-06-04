import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import { Provider } from 'react-redux';
import store from './app/Cliente/redux';
import InitialRoute from './app/Cliente/routes/InitialRoute';
import store from './app/Cliente/redux/index';
class App extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
    }, (error) => { console.log(error); });
  }
  

  componentWillMount() {
    // Initialize firebase instance
    const firebaseConfig = {
      apiKey: 'AIzaSyCaWQJ4RcLMEmCvrQShlOIJ3t7dfiLmW3I',
      authDomain: 'feiralizeapp-a4123.firebaseapp.com',
      databaseURL: 'https://feiralizeapp-a4123.firebaseio.com',
      projectId: 'feiralizeapp-a4123',
      storageBucket: 'feiralizeapp-a4123.appspot.com',
      messagingSenderId: '314943024760'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Initialize other services on firebase instance
    // firebase.firestore() // <- needed if using firestore
    // firebase.functions() // <- needed if using httpsCallable
    firebase.firestore();
  }
    /*if (!firebase.apps.length) {
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
    } */

  //A proposta de fazer authentication com redux
  //eh para salvar os estados no redux 
  //ao inves de ser no componente (implementando toda a parte logica)
  //e o componente ter apenas a função de mostrar e mandar os eventos para o redux
  //OBS: Call action creator when a user types or clicks a button

  render() {
    console.disableYellowBox = true;
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
