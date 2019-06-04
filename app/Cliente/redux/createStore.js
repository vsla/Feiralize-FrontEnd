import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import { persistStore, persistReducer } from 'redux-persist';
//Redux Thunk is a middleware, so we need to import a helper 
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import reducers from './reducers';
import {
  persistConfig,
  rrfConfig
} from '../../config';

//Creating Store and Make it Usable to others
export default (initialState) => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(
    persistedReducer,
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
