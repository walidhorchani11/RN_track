import React from 'react';
import {View, Text} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import client from './src/graphql/client';
import SearchBox from './src/components/SearchBox';

const App = () => {
  console.log('helllooooooo');
  return (
    <ApolloProvider client={client}>
      <View>
        <Text>
          hello walid hello walid hello walid hello walid hello walid hello
          walid vhello walidhello walidvv hello walid
        </Text>
        <SearchBox />
      </View>
    </ApolloProvider>
  );
};

export default App;
