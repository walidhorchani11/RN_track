import React from 'react';
import {View, Text} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import client from './src/graphql/client';
import Equipment from './src/screens/EquipmentScreen';

const App = () => {
  console.log('helllooooooo');
  return (
    <ApolloProvider client={client}>
      <View>
        <Equipment />
      </View>
    </ApolloProvider>
  );
};

export default App;
