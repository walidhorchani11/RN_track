import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const SearchBox = (props) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#999999',
  },
});

export default SearchBox;
