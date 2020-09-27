import React from "react";
import { InitialStateType } from './types';
import { initialState } from './initialState';

interface AuthContextProps {
  state: InitialStateType,
  authenticateUser: (formValues: any) => void,
  logout: () => void
 };

const AuthContext = React.createContext<AuthContextProps>({
  state: initialState,
  authenticateUser: () => null,
  logout: () => null,
})

export default AuthContext;
