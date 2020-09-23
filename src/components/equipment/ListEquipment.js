import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import ItemEquipment from './ItemEquipment';

const ListEquipment = ({data}) => {
  console.log('data equipments :', data);
  return (
    <View>
      {data.equipments.map((equipment) => {
        return <ItemEquipment equipment={equipment} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  equipmentsContainer: {},
});

export default ListEquipment;
