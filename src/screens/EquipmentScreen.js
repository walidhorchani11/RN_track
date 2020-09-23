import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';

import {useQuery} from '@apollo/client';
import GET_EQUIPMENTS from '../graphql/query/equipment';

import SearchBox from '../components/SearchBox';
import EquipmentList from '../components/EquipmentList';

const EquipmentScreen = () => {
  const {error, data, loading} = useQuery(GET_EQUIPMENTS);

  const displayData = () => {
    if (loading) return <ActivityIndicator size="large" color="#C0C0C0" />;
    if (error) return <Text>Error : {error.message}</Text>;
    if (data) return <EquipmentList data={data} />;
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
  },
  searchContainer: {
    alignItems: 'center',
  },
});

export default EquipmentScreen;
