import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Forecast from "./components/Forecast";
import Features from "./components/Features";
import Contact from "./components/Contact";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0)
  setProgress=()=>{
    setProgress()
  }
  return (
    <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar />
        <Switch>
          <Route exact path="/features">
            <Features />
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Carousel />
            <Forecast />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
