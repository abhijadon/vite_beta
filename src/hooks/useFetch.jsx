import { useEffect, useState } from 'react';

function useFetchData(fetchFunction) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // flag to prevent state updates if unmounted

    async function fetchData() {
      try {
        const result = await fetchFunction();
        if (isMounted) {
          setData(result);
          setSuccess(true);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    }

    fetchData();

    // Cleanup function to prevent state updates if unmounted
    return () => {
      isMounted = false;
    };
  }, []); // useEffect runs only once on mount

  return { data, isLoading, isSuccess, error };
}

export const useFetch = (fetchFunction) => {
  return useFetchData(fetchFunction);
}

export default useFetch;
