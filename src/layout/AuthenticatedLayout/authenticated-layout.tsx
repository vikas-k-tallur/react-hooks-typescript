import React,  { useContext } from 'react';
import { Container } from '@material-ui/core';
import { TopbarComponent } from '../navigation/top';
import { useStyles } from './styles';
import { Spinner } from '../../components/spinner';
import AuthContext from '../../context/auth/authContext';

interface AuthenticatedLayoutProps {
  children: React.Component
}

const AuthenticatedLayout = (props: AuthenticatedLayoutProps) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { state: { toggleSpinner } } = authContext;
  return (
    <div className={classes.root}>
      {toggleSpinner && <Spinner />}
      <TopbarComponent />
      <Container maxWidth="lg" className={classes.container}>
        {props.children}
      </Container>
    </div>
  );
}

export default AuthenticatedLayout;