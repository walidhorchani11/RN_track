import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Button} from 'react-native';

import ItemEquipment from './ItemEquipment';
import Card from '../shared/Card';
import ItemUser from '../user/ItemUser';

const ListEquipment = ({data}) => {
  console.log('data equipments :', data);
  return (
    <ScrollView>
      {data.equipments.map((equipment) => {
        return (
          <Card key={equipment.id} style={styles.cardContainer}>
            <ItemEquipment equipment={equipment} />
            {equipment.user ? (
              <View style={styles.itemUserContainer}>
                <ItemUser user={equipment.user} />
                <Button title="liberer" />
              </View>
            ) : (
              <Button title="affecter" />
            )}
          </Card>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemUserContainer: {
    backgroundColor: 'yellow',
    flex: 1,
  },
});

export default ListEquipment;
