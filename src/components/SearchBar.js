import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
  <View style={styles.backgroundStyle}>
    <FontAwesome style={styles.iconStyle} name="search" />
    <TextInput
      style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={onTermChange}
      autoCapitalize="none"
      autoCorrect={false}
      onEndEditing={onTermSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
