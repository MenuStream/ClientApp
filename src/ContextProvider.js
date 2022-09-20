import { useEffect, useState, createContext } from "react";

export const ContextProvider = createContext(null);


const ContextValueFetcher = () => {
    const [ProviderData, setProviderData] = useState({});
    const [data, setData] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const fetchData = async () => {
      const url = process.env.REACT_APP_BACKEND_URL;
      await axios.get(url).then((response) => {
        setData(response.data);
      });
    };
  
    useEffect(() => {
      setProviderData((prev) => ({
        ...prev,
        data: data,
        scrollPosition: scrollPosition,
        setScrollPosition: setScrollPosition,
      }));
    }, [data, scrollPosition]);
  
    useEffect(() => {
      fetchData();
    }, []);

    return value={ProviderData}>
  
}
export default ContextProvider