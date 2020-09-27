import { AuthResponseType } from './types';
import { ActionTypes } from './actionTypes';

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
};
  
type PayLoadTypes = {
  [ActionTypes.LoginSuccess]: {
    authResponse: AuthResponseType | null,
  },
  [ActionTypes.LogoutSuccess]: {
    user: null
  },
  [ActionTypes.LoginFailed]: {
    error: string | null
  }
  [ActionTypes.ToggleSpinner]: {
    show: boolean
  }
};
  
export type LoginActions = ActionMap<PayLoadTypes>[keyof ActionMap<
    PayLoadTypes
>];