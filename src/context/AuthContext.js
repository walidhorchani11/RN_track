import React, {createContext, useState} from 'react';
//creer le Context
export const AuthContext = createContext();
const Provider = AuthContext.Provider;

const AuthProvider = ({children}) => {
  //mettre les donees que je veux les partager pour tous les components
  const [authInfo, setAuthInfo] = useState({
    token: null,
    userData: {},
  });

  const isAuthenticated = authInfo.token !== null;

  return (
    <Provider value={{authInfo, setAuthInfo, isAuthenticated}}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
