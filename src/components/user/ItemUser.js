import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ItemUser = ({user}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/avatar_profile.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <Text>{user && user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 150,
    //borderColor: 'red',
    borderWidth: 1,
    marginVertical: 10,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    //borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ItemUser;
