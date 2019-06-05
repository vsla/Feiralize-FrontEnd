// defaults to localStorage for web and AsyncStorage for react-native
import AsyncStorage from 'redux-persist/lib/storage'; 

//Qual storage persistir
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //blacklist: ['auth']
};

export { persistConfig };
