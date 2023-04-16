import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  const loggedInHandler = (token) => {
    setToken(token);
  };
  const loggedOutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loggedInHandler,
    logout: loggedOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
