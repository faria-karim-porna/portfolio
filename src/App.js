import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideNav from './Components/SideNav/SideNav';
import Home from './Components/Home/Home';
import Certificates from './Components/Certificates/Certificates';
import Publications from './Components/Publications/Publications';
import ParticleComponent from "./ParticleComponent";
import ContactForm from './Components/ContactForm/ContactForm';
import AllProjects from './Components/AllProjects/AllProjects';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path = "/publications">
            <Publications></Publications>
          </Route>
          <Route path="/certificates">
            <Certificates></Certificates>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/allProjects">
            <AllProjects></AllProjects>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
