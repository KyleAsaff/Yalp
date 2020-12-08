import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar
        onTermChange={(value) => setTerm(value)}
        onTermSubmit={() => console.log(term)}
      />
      <Text>
        Search Screen
        {term}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
