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
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: 
      return state;
    case EMAIL_CHANGED:
    //do not mutate state ex: state.email = action.payload
    //state.email (new) === state (old)
    //because JS do not create a copy of the object action.payload.
    //both states references to the same object action.payload.
    //if both states are the same, the reducer will do nothing
    //if both states are different, reducer will rerender the component
    //im this case, crio um novo objeto, jogo todo o state atual, sobrescrevo a chave 'email'
    //e salvo novo state.
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };  
    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload };  
    case LOGIN_USER_SHORT_PASSWORD:
      return { ...state, error: action.payload };
    case LOGIN_USER_EMAIL_INVALID:
      return { ...state, error: action.payload };
    case LOGIN_USER_BLANK:
      return { ...state, error: action.payload };
    case RESET_AUTH_FIELDS:
      return { ...state, email: action.payload, password: action.payload };
    case RESET_ERROR:
      return { ...state, error: action.payload }; 
    case LOADING_USER:
      return { ...state, loading: action.payload };
    case RESET_LOADING:
      return { ...state, loading: action.payload };
    //To reset all states
    // return { ...state, ... INITIAL_STATE };  
  }
};
