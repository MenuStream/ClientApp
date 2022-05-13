import "./App.css";
import Home from "./components/Home";
import ReactGA from "react-ga";

const TRACKING_ID = "G-DMTNV3NNLB"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return <Home />;
}

export default App;
