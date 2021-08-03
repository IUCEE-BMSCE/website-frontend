import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import JoinUs from "./components/JoinUs";
import Subscribe from"./components/Subscribe";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/aboutus">
            <About />
          </Route>
          <Route path="/contactus">
            <Contact />
          </Route>
          <Route path="/joinus">
            <JoinUs />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/*<Footer />*/}
      </Router>
    </div>
  );
}

export default App;
