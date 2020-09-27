import React, {createContext, useState} from 'react';

const AuthContext = ({children}) => {
  //creer le Context
  const Context = createContext();
  const Provider = Context.Provider;

  //mettre les donees que je veux les partager pour tous les components
  const [authInfo, setAuthInfo] = useState({
    token: null,
    infoUser: {},
  });

  const isAuthenticated = authInfo.token !== null;

  return (
    <Provider value={(authInfo, setAuthInfo, isAuthenticated)}>
      {children}
    </Provider>
  );
};

export default AuthContext;
