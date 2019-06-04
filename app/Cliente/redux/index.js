import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
//Redux Thunk is a middleware, so we need to import a helper 
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import reducers from './reducers';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//Creating Store
const initialState = {};
    const store = createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(ReduxThunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, rrfConfig)
      )
    );
    //where {} is the initial state
    //but i can choose to prepopulate
    //applyMiddleware is a store enhancer, 
    //adding an extra functionality to store
export default store;
