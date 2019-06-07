// defaults to localStorage for web and AsyncStorage for react-native
import AsyncStorage from 'redux-persist/lib/storage'; 
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

//Persist rules
/*const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //blacklist: ['auth']
};*/

const firebasePersistConfig = {
  key: 'firebaseState',
  storage: AsyncStorage,
  stateReconciler: hardSet
};

const authPersistConfig = {
  key: 'authState',
  storage: AsyncStorage,
  blacklist: ['error']
};

export { firebasePersistConfig, authPersistConfig };
