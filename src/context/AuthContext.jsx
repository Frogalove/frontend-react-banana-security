import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});
export function AuthContextProvider({children}, isAuth) {
  const [IsAuth,setAuth] = useState (false);
  const navigate =useNavigate()

  function setAuthTrue () {
    setIsAuth (true)
  }
function setAuthFalse() {
    setIsAuth (false)
}
function logOut() {
    console.log('user is uitgelogd')
  setIsAuth (false);
    navigate ('/')
}
function logIn() {
    console.log('user is ingelogd')
  setIsAuth(true);
  navigate ('/profile')
}
const Data = {
    isAuth:isAuth,
    logOut:logOut,
    logIn:logIn,
  };

  return (
    <AuthContext.Provider value ={Data}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;