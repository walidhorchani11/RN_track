import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchBox = (props) => {
  return (
    <View style={styles.searchContainer}>
      <FeatherIcon name="search" size={24} />
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#C0C0C0',
  },
});

export default SearchBox;
