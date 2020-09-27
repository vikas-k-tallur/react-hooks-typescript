import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { useStyles } from './styles';

interface SpinnerProps {
}

const Spinner = (props: SpinnerProps) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress
                color="inherit"
                variant="indeterminate"
                className={classes.bottom}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />
        </Backdrop>
    );
}

export default Spinner;
