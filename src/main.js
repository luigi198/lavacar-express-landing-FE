// Import Libs
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Import Components
import App from './components/App.jsx';
import Home from './components/home.component.jsx';
import Contact from './components/contact.component.jsx';
import About from './components/aboutUs.component.jsx';

// Import Sass
require('./styles/main.scss');

ReactDom.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutUs" component={About} />
    </Route>
  </Router>
), document.getElementById('container'))
