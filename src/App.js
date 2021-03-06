import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import JoinUs from './components/JoinUs'
import Review from './components/Review'
import Single from './components/Single'

class App extends Component {
  render() {
    return (
      <div>
         <Router>
        <Header></Header>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/joinus" component={JoinUs} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/review/:id" component={Single} />

        <Footer></Footer>
         </Router>
      </div>
    );
  }
}

export default App;
