import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function AuthRoute({ path, ...props }) {
  const userContext = useContext(UserContext);
  const { user } = userContext.data;

  useEffect(() => {
    if(user != null){
        return window.location.href = "/dashboard"
    }
  }, [user])

  if(user == null) return (
    <Route {...props}/>
  )
  return <div/>

}
