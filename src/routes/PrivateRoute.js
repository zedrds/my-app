import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function PrivateRoute({ path, ...props }) {
  const userContext = useContext(UserContext);
  const { user } = userContext.data;

  useEffect(() => {
    if (user == null) {
      window.location.href = "/login?message=Please login to continue";
      return;
    }
  }, [user]);

  if (user != null) return <Route {...props} />;

  return <div />;
}
