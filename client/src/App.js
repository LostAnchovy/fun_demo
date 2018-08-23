import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form'
import Home from './components/Home'
import Paragraphs from './components/Paragraph';
import Lost from './components/Lost'
import logo from './logo.svg';
import Urlparams from './components/Urlparams'
import './App.css';
import {BrowserRouter as Router, Route,Switch,} from 'react-router-dom'
import Roster from './components/Roster'
import Eventlist from './components/Eventlist'
import Eventform from './components/Eventform';
import Userinfo from './components/Userinfo'

class App extends Component {
  render() {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/paragraphs" component={Paragraphs}/>
            <Route exact path ="/urlparams" component={Urlparams}/>
            <Route exact path="/forms" component={Form}/>
            <Route exact path="/roster" component={Roster}/>
            <Route exact path="/eventlist" component={Eventlist}/>
            <Route path="/user/:userId" component={Userinfo}/>
            <Route exact path="/eventform" component={Eventform}/>
            <Route component={Lost}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
