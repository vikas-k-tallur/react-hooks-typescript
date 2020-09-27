import React, { useContext } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { Form, FormikProps } from "formik";
import AuthContext from '../../../context/auth/authContext';
import { FormValues } from './validationSchema';
import { useStyles } from '../styles';

interface LoginFormProps {
    formikProps: FormikProps<FormValues>
}

const LoginForm = (props: LoginFormProps) => {
    const classes = useStyles();
    const authContext = useContext(AuthContext);
    const { state: { error } } = authContext;
    const { formikProps: { handleChange, touched, errors } } = props
    return (
        <Form 
            className={classes.form}
            autoComplete='off'
        >
            <Grid container spacing={2} alignItems="center" direction="column">
                <Grid item className={classes.gridItem}>
                    <TextField
                        error={Boolean(errors.email)}
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        helperText={
                        errors.email && touched.email ? errors.email : null
                        }
                    />
                </Grid>
                <Grid item className={classes.gridItem}>
                    <TextField
                        error={Boolean(errors.password)}
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={
                        errors.password && touched.password
                            ? errors.password
                            : null
                        }
                    />
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                </Grid>
                <Grid item className={classes.gridItem}>
                    {error && <div className={classes.errorMessage}> { error } </div>}
                </Grid>
            </Grid>
        </Form>
    );
}
export default LoginForm;