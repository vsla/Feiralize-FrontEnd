import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './app/Cliente/redux/createStore';
import { firebaseConfig } from './app/config';
import InitialRoute from './app/Cliente/routes/InitialRoute';


class App extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
    }, (error) => { console.log(error); });
  }
  

  componentWillMount() {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      // Initialize other services on firebase instance
      // firebase.firestore() // <- needed if using firestore
      // firebase.functions() // <- needed if using httpsCallable
      firebase.firestore();
    } else {
      firebase.app();
    }
  }
  //A proposta de fazer authentication com redux
  //eh para salvar os estados no redux 
  //ao inves de ser no componente (implementando toda a parte logica)
  //e o componente ter apenas a função de mostrar e mandar os eventos para o redux
  //OBS: Call action creator when a user types or clicks a button

  // Setup react-redux so that connect HOC can be used
  render() {
    const initialState = {};
    const { store, persistor } = createStore(initialState);
    console.disableYellowBox = true;
    return (
      // The app start calling InitialRoute in routes
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor="darkorange" />
          <InitialRoute />
        </PersistGate>
      </Provider>
    );
   }
}
export default App;
