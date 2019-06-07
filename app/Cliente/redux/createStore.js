import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import { persistStore } from 'redux-persist';
//Redux Thunk is a middleware, so we need to import a helper 
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducers from './reducers';
import {
  rrfConfig
} from '../../config';

//Creating Store and Make it Usable to others
export default (initialState) => {
  //const persistedReducer = persistReducer(rootPersistConfig, reducers);
  const store = createStore(
    rootReducers,
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
  const persistor = persistStore(store);
  return { store, persistor };
};
