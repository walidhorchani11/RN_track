import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchBox = (props) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.iconContainer}>
        <FeatherIcon name="search" size={25} />
      </View>
      <View>
        <TextInput placeholder={props.placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#C0C0C0',
  },
  iconContainer: {
    marginHorizontal: 15,
  },
});

export default SearchBox;
