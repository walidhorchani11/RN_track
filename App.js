import React from 'react';
import {View} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import client from './src/graphql/client';
import EquipmentScreen from './src/screens/EquipmentScreen';
import AuthScreen from './src/screens/AuthScreen';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View>
        {/* <EquipmentScreen /> */}
        <AuthScreen />
      </View>
    </ApolloProvider>
  );
};

export default App;
