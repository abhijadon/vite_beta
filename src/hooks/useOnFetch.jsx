import { useState } from 'react';

export default function useOnFetch() {
  const [result, setResult] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  let onFetch = async (fetchingFn) => {
    const data = await fetchingFn();
    setResult(data.result);

    if (data.success === true) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  return { onFetch, result, isSuccess };
}
