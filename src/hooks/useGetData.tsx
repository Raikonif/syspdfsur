import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

interface IProps<T> {
  dataToFetch: () => Promise<AxiosResponse<T>>;
}

interface IState<T> {
  data: T;
  loading: boolean;
  hasError: boolean;
  error: unknown | null;
}
function useGetData<T>({ dataToFetch }: IProps<T>) {
  const [state, setState] = useState<IState<T>>({
    data: [] as T,
    loading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await dataToFetch();
        setState({
          data: fetchedData.data,
          loading: false,
          hasError: false,
          error: null,
        });
        setState({ ...state, data: fetchedData.data });
        console.log("fetchedData", fetchedData);
      } catch (error) {
        setState({
          data: [] as T,
          loading: false,
          hasError: true,
          error: error,
        });
      }
    };
    getData();
  }, [dataToFetch]);
  return {
    data: state.data,
    loading: state.loading,
    hasError: state.hasError,
    error: state.error,
  };
}

export default useGetData;
