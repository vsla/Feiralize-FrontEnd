import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import { authPersistConfig, firebasePersistConfig } from '../../../config';
import cI from './cartItems';

//Reducers existentes aglomerado
export default combineReducers({
  cartItems: cI,
  auth: persistReducer(authPersistConfig, authReducer),
  firestore: firestoreReducer,
  firebase: persistReducer(firebasePersistConfig, firebaseReducer)
  // firestore: firestoreReducer // <- needed if using firestore
});
