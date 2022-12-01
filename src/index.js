import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Services from './pages/Services';
import BioPage from './pages/BioPage';
import Contact from './pages/Contact';
import 'antd/dist/antd.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/bio" render={() => <BioPage />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/services" render={() => <Services />} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);
