import React, { useContext } from 'react'
import { Container } from "@material-ui/core";
import { useStyles } from './styles';
import { Spinner } from '../../components/spinner';
import AuthContext from '../../context/auth/authContext';

interface UnAuthenticatedLayoutProps {
    children: React.Component
}

const UnAuthenticatedLayout = (props: UnAuthenticatedLayoutProps) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { state: { toggleSpinner } } = authContext;
  return (
    <div className={classes.root}>
      {toggleSpinner && <Spinner />}
      <Container maxWidth="lg" className={classes.container}>
        {props.children}
      </Container>
    </div>
  )
}

export default UnAuthenticatedLayout;
