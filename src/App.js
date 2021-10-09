import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Forecast from "./components/Forecast";
import Features from "./components/Features";
import Contact from "./components/Contact";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const apikey1=process.env.REACT_APP_WEATHER_API_KEY1;
  const apikey2=process.env.REACT_APP_WEATHER_API_KEY2;
  const [progress, setProgress] = useState(0);
  const setProg = (progress) => {
    setProgress(progress);
  };
  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={progress} height={2} />
        <Navbar set={setProg} />
        <Switch>
          <Route exact path="/features">
            <Features set={setProg} />
          </Route>
          <Route exact path="/contact">
            <Contact set={setProg} />
          </Route>
          <Route exact path="/">
            <Carousel apikey1={apikey1} set={setProg} />
            <Forecast apikey2={apikey2} set={setProg} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
