import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';

import {useQuery} from '@apollo/client';
import GET_EQUIPMENTS from '../graphql/query/equipment';

import SearchBox from '../components/SearchBox';
import ListEquipment from '../components/equipment/ListEquipment';

const EquipmentScreen = () => {
  const {error, data, loading} = useQuery(GET_EQUIPMENTS);

  const displayData = () => {
    if (loading) return <ActivityIndicator size="large" color="#C0C0C0" />;
    if (error) return <Text>Error : {error.message}</Text>;
    if (data) return <ListEquipment data={data} />;
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchContainer}>
        <SearchBox placeholder="search equipment" />
      </View>
      <View>{displayData()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  searchContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default EquipmentScreen;
