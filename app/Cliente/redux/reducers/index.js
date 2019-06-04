import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AsyncStorage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

import cI from './cartItems';

//Reducers existentes aglomerado
export default combineReducers({
  cartItems: cI,
  auth: AuthReducer,
  firestore: firestoreReducer,
  firebase: persistReducer({
    key: 'firebaseState', 
    storage: AsyncStorage, 
    stateReconciler: hardSet
  }, firebaseReducer)
  // firestore: firestoreReducer // <- needed if using firestore
});
