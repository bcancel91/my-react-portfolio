import React from "react";
import Nav from "./components/nav";
import ProfileBanner from "./pages/about/profilePic";
import AboutBox from "./pages/about/about";
import Footer from "./components/footer";
import Projects from "./pages/portfolio/projects";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import { BrowserRouter  as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/my-react-portfolio">
      <div>
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Zoom>
            <ProfileBanner />
            </Zoom>
            <AboutBox />
          </Route>

          <Route path="/portfolio" exact>
            <Projects />
          </Route>

          <Route path="/contact" exact>

          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
