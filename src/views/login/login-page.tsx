import React, { useContext, useEffect } from 'react';
import LoginComponent from '../../components/auth';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { useStyles } from './styles';

interface HomePageProps {
  children: React.Component
}

const LoginPage = (props: HomePageProps) => {
  const classes = useStyles();
  const history = useHistory()
  const authContext = useContext(AuthContext);
  const { state: { isAuthenticated }, authenticateUser } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/home");
    }
  }, [isAuthenticated, history]);
  return (
    <div className={classes.root}>
      <LoginComponent authenticateUser={authenticateUser} />
    </div>
  );
}

export default LoginPage;