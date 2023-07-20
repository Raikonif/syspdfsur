import React, { useEffect, useState } from "react";

interface IProps<T> {
  dataToFetch: () => Promise<T>;
}
function useGetData<T>({ dataToFetch }: IProps<T>) {
  const [data, setData] = useState<T>([] as T);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    try {
      const fetchedData = await dataToFetch();
      setData(fetchedData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { data, loading, error };
}

export default useGetData;
