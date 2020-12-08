import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('An error has a occured.');
    }
  };
  return (
    <View>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      { errorMessage.length > 0 && <Text>{errorMessage}</Text> }
      <Text>
        We have found
        {' '}
        {results.length}
        {' '}
        results
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
