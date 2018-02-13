import React, { Component } from 'react';
import Gallery from './Gallery'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     
       <Router >
        <Route path="/"  component={Gallery} />
       </Router>
     
    );
  }
}

export default App;
