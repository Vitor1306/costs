import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Project from './components/pages/Project';
import Navbar from './components/Navbar'
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Container>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Project />
        </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App