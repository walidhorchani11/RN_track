import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ItemEquipment = ({equipment}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/tel.jpg')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <Text>{equipment.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    height: 150,
    //borderColor: 'red',
    borderWidth: 1,
    //marginVertical: 30,
  },
  imageContainer: {
    width: '100%',
    height: '80%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ItemEquipment;
