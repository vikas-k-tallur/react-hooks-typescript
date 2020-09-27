import React, { useReducer } from "react";
import {
    loginReducer,
} from "./authReducer";
import { ActionTypes } from './actionTypes';
import { initialState } from './initialState';
import AuthContext from './authContext';
import { publicRequest } from '../../utils/api-proxy';
import { AuthRequestType, AuthResponseType } from "./types";

const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(loginReducer, initialState);
  
    const login = async (formValues: any) => {
      dispatch({
        type: ActionTypes.ToggleSpinner,
        payload: {
          show: true,
        }
      });
      publicRequest<AuthRequestType, AuthResponseType>({
        url: '/login',
        method: 'POST',
        data: formValues,
      }).then(response => {
        console.log(response);
        dispatch({
          type: ActionTypes.LoginSuccess,
          payload: {
            authResponse: response.data? response.data :  null
          },
        });
        dispatch({
          type: ActionTypes.ToggleSpinner,
          payload: {
            show: false,
          }
        });
      }).catch(err => {
        dispatch({
          type: ActionTypes.LoginFailed,
          payload: {
            error: err.error
          }
        });
        dispatch({
          type: ActionTypes.ToggleSpinner,
          payload: {
            show: false,
          }
        });
      });
     
    };
  
    const logout = async () => {
      dispatch({
        type: ActionTypes.LogoutSuccess,
        payload: {
          user: null
        }
      });
    };
  
    return (
      <AuthContext.Provider value={{ state, authenticateUser: login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider;