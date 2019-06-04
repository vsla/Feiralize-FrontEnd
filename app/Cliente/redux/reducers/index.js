import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import cI from './cartItems';

//Reducers existentes aglomerado
export default combineReducers({
  cartItems: cI,
  auth: AuthReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
});
