import React, { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

interface IProps<T> {
  dataToFetch: () => Promise<T>;
}
function useGetData<T>({ dataToFetch }: IProps<T>): {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  loading: boolean;
  error: boolean;
} {
  const [data, setData] = useState<T>([] as T);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const fetchedData = await dataToFetch();
        setData(fetchedData);
        console.log("fetchedData", fetchedData);
      } catch (error) {
        console.error(error);
        setError(true);
        // setData([] as T);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [dataToFetch]);
  return {
    setData,
    data,
    loading,
    error,
  };
}

export default useGetData;
