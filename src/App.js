import "./App.css";
import Home from "./Pages/Home";
import ArticlePage from "./Pages/ArticlePage";
import ReactGA from "react-ga";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

const TRACKING_ID = "G-XBWCQ0GGBM"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export const ContextProvider = createContext(null);

export default function App() {
  const [data, setData] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const fetchData = async () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    await axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        data: data,
        scrollPosition: scrollPosition,
        setScrollPosition: setScrollPosition,
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="article/:index" element={<ArticlePage />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </Router>
    </ContextProvider.Provider>
  );
}
