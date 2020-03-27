import React, { useEffect, useState } from 'react';
import * as api from './api';

const DadJoke = () => {
  const [dadJoke, setDadJoke] = useState('');
  
  /* 
    - The callback passed to useEffect is called once on the component mount a la componentDidMount
    - If a function is returned from useEffect it will be called on unmount a la componentWillUnmount
    - If values are passed into the array, the callback will fire every time one of those values changes a la componentDidUpdate
    - If no values are passed into the array, it will only be called once on component mount
    - A useEffect callback cannot be asynchronous, so we have to nest an asynchronous function
  */
  useEffect(() => {
    const fetchDadJoke = async () => {
      const joke = await api.fetchDadJoke();
      setDadJoke(joke);
    };

    fetchDadJoke();
  }, []);

  return (
    <h3>
      {dadJoke}
    </h3>
  )
}

export default DadJoke;