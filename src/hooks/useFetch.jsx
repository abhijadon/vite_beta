import { useEffect, useState } from 'react';

function useFetchData(fetchFunction) {
  const [data, setData] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchFunction();
        setData(result);
        setSuccess(true);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [fetchFunction]); // Corrected dependency array

  return { data, isSuccess, error };
}

export const useFetch = (fetchFunction) => {
  const { data, isSuccess, error } = useFetchData(fetchFunction);

  return { data, isSuccess, error };
}

export default useFetch;
