import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

import {useQuery, useLazyQuery} from '@apollo/client';
import GetCompanies from '../graphql/query/company';

import SearchBox from '../components/SearchBox';

const EquipmentScreen = (props) => {
  //const {loading, error, data} = useQuery(EXCHANGE_RATES);
  // const [search, {error, data, loading}] = useLazyQuery(GetCompanies);

  // const onGet = async () => {
  //   try {
  //     await search();
  //   } catch (error) {
  //     console.log('error lors du get companies:', error);
  //   }
  // };

  // if (loading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error : {error.message}</Text>;

  return (
    <View style={styles.screen}>
      <View style={styles.searchContainer}>
        <SearchBox placeholder="search equipment" />
      </View>

      {/* <Button title="companies" onPress={onGet} /> */}
      {/* <EquipmentList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
  },
  searchContainer: {
    alignItems: 'center',
  },
});

export default EquipmentScreen;
