import React, {useContext} from 'react';
import {View} from 'react-native';
import {ApolloProvider, HttpLink} from '@apollo/client';

import client from './src/graphql/client';
import AuthProvider, {AuthContext} from './src/context/AuthContext';

import EquipmentScreen from './src/screens/EquipmentScreen';
import AuthScreen from './src/screens/AuthScreen';

const App = () => {
  
const authContext = useContext(AuthContext);
  const token = authContext.authInfo.token;
  const headers = token ? {authorization: token} : undefined;
  const httpLink = new HttpLink({headers});
  client.setLink(httpLink);
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <View>
          {/* <EquipmentScreen /> */}
          <AuthScreen />
        </View>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default App;
