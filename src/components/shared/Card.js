import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.cardContainer, props.style]}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    padding: 5,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 5,
  },
});

export default Card;
