import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

import {useQuery, useLazyQuery} from '@apollo/client';
import GetCompanies from '../graphql/query/company';

const SearchBox = (props) => {
  //const {loading, error, data} = useQuery(EXCHANGE_RATES);
  const [search, {error, data, loading}] = useLazyQuery(GetCompanies);

  const onGet = async () => {
    try {
      await search();
    } catch (error) {
      console.log('error lors du get companies:', error);
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  return (
    <View style={styles.center}>
      <Text> mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</Text>
      <Text>{JSON.stringify(data)}</Text>

      <Button title="companies" onPress={onGet} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    width: '100%',
    height: 100,
    backgroundColor: 'green',
  },
});

export default SearchBox;
