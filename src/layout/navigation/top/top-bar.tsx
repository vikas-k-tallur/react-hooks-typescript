import React, { useContext } from 'react';
import { Toolbar, IconButton, AppBar, Typography } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import { useStyles } from './styles';
import AuthContext from '../../../context/auth/authContext';

interface TopbarProps {
}

const Topbar = (props: TopbarProps) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { state: { user }, logout } = authContext;
  console.log(user);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              Welcome to {user?.name}
          </Typography>
          <IconButton onClick={logout} className={classes.logOutIcon}>
            <InputIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Topbar;