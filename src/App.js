import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Switch, Route, Redirect } from 'react-browser-router';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Menu from './Menu';


function App() {
  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
