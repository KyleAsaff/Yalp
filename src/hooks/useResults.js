import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async (term) => {
    console.log(term);
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san francisco',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('An error has a occured.');
    }
  };
  return [searchApi, results, errorMessage];
};
