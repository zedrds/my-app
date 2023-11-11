import React, { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "../views/Login";
import Screen from "../views/Screen";

export default function Routing() {
    const userContext = useContext(UserContext);
    const {loading, refreshUser} = userContext.data
    const {user} = userContext.data
  
    useEffect(() => {
      refreshUser()
    }, [])
  
    return (
      <div className="content">
        {loading ? <></>:
              <Router>
              <Switch>
                  <AuthRoute path='/' exact component={Login}  />
                  <AuthRoute path='/login' exact component={Login} />
                  <PrivateRoute path="/dashboard" exact component={Screen} />
              </Switch>
            </Router>
        }
      </div>
    );
  }