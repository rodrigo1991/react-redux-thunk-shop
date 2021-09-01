import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../pages/Login/SignIn.jsx';

const LoginRoute = () => {
  return (
    <>
      <Route path="/login">
        <SignIn />
      </Route>
    </>
  );
};

export default LoginRoute;
