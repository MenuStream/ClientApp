import Home from "./Pages/Home";
import ArticlePage from "./Pages/ArticlePage";
import Landing from "./Pages/Landing";

import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
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

  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="menu">
          <Route path="" element={<Home Context={ProviderData} />} />
          <Route
            path="article/:index"
            element={<ArticlePage Context={ProviderData} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </Router>
  );
}
