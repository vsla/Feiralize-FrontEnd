import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_SHORT_PASSWORD,
  LOGIN_USER_EMAIL_INVALID,
  LOGIN_USER_BLANK,
  RESET_AUTH_FIELDS,
  RESET_ERROR,
  LOADING_USER,
  RESET_LOADING
} from './types';

//ActionCreator is the index.js
//that creates actions below
//Action is a plain javascript object
//example of synchronous action below
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

//Validar Email
const isValidEmail = (email) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (reg.test(email) === false) {
    return false;
  } 
    return true;
};

//Validar Senha
const isShortPassword = (password) => {
  if (password.length < 6) {
    return true;
  }
    return false;
};

//Validar Credenciais
const verifyCredentials = (email, password, dispatch) => {
  if (email === '' || password === '') {
    loginUserBlank(dispatch);
  } else if (!isValidEmail(email)) {
    loginUserEmailInvalid(dispatch);
  } else if (isShortPassword(password)) {
    loginUserShortPassword(dispatch);
  } else {
    loginUserFailed(dispatch);
  }
};

//Helper Method para evitar ficar escrevendo
//todo esse codigo a cada login success
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS, 
    payload: user
  });
};

const loginUserFailed = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: 'Falha na autenticação.'
  });
};

const loginUserShortPassword = (dispatch) => {
  dispatch({
    type: LOGIN_USER_SHORT_PASSWORD,
    payload: 'Senha Mínima de 6 dígitos.'
  });
};

const loginUserEmailInvalid = (dispatch) => {
  dispatch({
    type: LOGIN_USER_EMAIL_INVALID,
    payload: 'Email inválido.'
  });
};

const loginUserBlank = (dispatch) => {
  dispatch({
    type: LOGIN_USER_BLANK,
    payload: 'Os campos são obrigatórios.'
  });
};

const resetAuthFields = (dispatch) => {
  dispatch({
    type: RESET_AUTH_FIELDS,
    payload: ''
  });
};

const resetError = (dispatch) => {
  dispatch({
    type: RESET_ERROR,
    payload: ''
  });
};

const loadingUser = (dispatch) => {
  dispatch({
    type: LOADING_USER,
    payload: true
  });
};

const resetLoading = (dispatch) => {
  dispatch({
    type: RESET_LOADING,
    payload: false
  });
};

//Redux-Thunk is used to handle any type of 
//asynchronous action creator (makes AJAX request)
//With Redux-Thunk, action creator will return a function
//this function will be called with 'dispatch'
//to say when to feed the reducers
//So we have to manually dispatch in .then and .catch
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    //Assim que clicar no botao e acionar o metodo loginUser
    //eh gerado um spinner de loading enquanto o firebase processa dados
    loadingUser(dispatch);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
        resetError(dispatch);
        resetLoading(dispatch);
        resetAuthFields(dispatch);
      })
      .catch(() => {
        verifyCredentials(email, password, dispatch);
        resetAuthFields(dispatch);
        resetLoading(dispatch);
      });
  };
};
