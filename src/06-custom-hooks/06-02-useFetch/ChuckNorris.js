import React from 'react';
import useFetch from './useFetch';

const ChuckNorris = () => {
  const { data, loading, error } = useFetch('https://api.chucknorris.io/jokes/random');

  if (error) {
    return <h3 style={{ color: 'red' }}>Error: {error.toString()}</h3>;
  }

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <h3>
      {data.value}
    </h3>
  )
}

export default ChuckNorris;
