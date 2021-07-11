import { Redirect, Route } from "react-router-dom";

import React from "react";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(localStorage.getItem("token"));
        if (localStorage.getItem("token") !== "undefined") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};