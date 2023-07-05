import React from "react";

interface IProps {
  dataToFetch: any;
}
function useGetData({ dataToFetch }: IProps) {
  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await dataToFetch();
      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
}

export default useGetData;
