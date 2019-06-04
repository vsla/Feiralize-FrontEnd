//this file contains all the definitions of actions types to be as a constant variable
//So that when we reference to a const variable if we write it wrong, an error appears
//type.js must be imported into the action and reducer files to both get access
//Purpose is to avoid referecing directly to wrong string (action.type) -> error does not appear
//So it will not dispatch that action.type to the reducer

//Nao usa export default porque eu quero exportar varios do msm arquivo
//export default soh exporta 1 do msm arquivo
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAILED = 'login_user_failed';
export const LOGIN_USER_SHORT_PASSWORD = 'login_user_short_password';
export const LOGIN_USER_EMAIL_INVALID = 'login_email_invalid';
export const LOGIN_USER_BLANK = 'login_blank';
export const RESET_AUTH_FIELDS = 'reset_auth_fields';
export const RESET_ERROR = 'reset_error';
export const LOADING_USER = 'loading_user';
export const RESET_LOADING = 'reset_loading';
export const CREATE_PROJECT = 'create_project';
