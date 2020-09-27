import { InitialStateType } from './types';
import { ActionTypes } from './actionTypes';
import { LoginActions } from './actions';

export const loginReducer = (
  state: InitialStateType,
  action: LoginActions
) => {
  switch (action.type) {
    case ActionTypes.LoginSuccess:
      return {
          ...state,
          user: action.payload.authResponse? {
            id: action.payload.authResponse.userId,
            name: `${action.payload.authResponse.lastName} ${action.payload.authResponse.firstName}`
          }: null,
          isAuthenticated: true,
          error: null
      };
    case ActionTypes.LogoutSuccess:
        return {
            ...state,
            user: null,
            isAuthenticated: false,
            error: null,
        };
    case ActionTypes.LoginFailed:
          return {
              ...state,
              user: null,
              isAuthenticated: false,
              error: action.payload.error,
          };
    case ActionTypes.ToggleSpinner:
      return {
          ...state,
          toggleSpinner: action.payload.show
      };
    default:
      return state;
  }
};