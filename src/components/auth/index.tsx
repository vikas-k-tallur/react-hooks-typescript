import React from "react";
import { Formik, FormikProps } from "formik";
import { validationSchema, FormValues } from './form/validationSchema';
import { initialValues } from './form/initialValues';
import LoginForm from './form/loginForm';

interface LoginComponentProps {
  authenticateUser: (values: FormValues) => void
}

const LoginComponent = (props: LoginComponentProps) => {
  const singIn = (
    values: FormValues
  ) => {
     props.authenticateUser(values);
  };
  
  return (
    <React.Fragment>
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => singIn(values)}
      >
          {(formikProps: FormikProps<FormValues>) => {
              return (
                  <LoginForm formikProps={formikProps} />
              )
          }}
      </Formik>
    </React.Fragment>
  );
};

export default LoginComponent;