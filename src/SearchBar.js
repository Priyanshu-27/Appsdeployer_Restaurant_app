import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const SearchBar = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    // height: 40,
    // borderColor: 'white',
    // borderWidth: 1,
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // marginBottom: 0,
    // marginTop:38
  },
});

export default SearchBar;
