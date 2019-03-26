import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ListeDev from './composants/ListeDev';
import Header from './composants/HeaderComp';
import Footer from './composants/FooterComp';
import Home from './composants/HomeComp'; 
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NameForm from './cours/nameForm';
import PropViewer from './cours/propviewer';
import PageNotFound from './cours/PageNotFound';

class App extends Component { 
  render() {
    return (
    <Router>
      <div div="container">
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/form' component={NameForm}/>
      <Route path='/props' component={PropViewer}/>
      <Route path='/logging' component='LogingHome'/>
      <Route component={PageNotFound}/>
      

      </Switch>
     <Footer/>
      </div>
      </Router>
    );
  }
}
export default App;
