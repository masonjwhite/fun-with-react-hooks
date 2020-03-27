import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  // State variables
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  // Calling fetch - the callback passed to useEffect cannot be async
  useEffect(() => {
    // Nested async function
    const fetchData = async () => {
      try {
        const res = await fetch(url, {...options});
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Call the inner async function
    fetchData();
    
    // Re-run the hook if the url or any options have changed
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;