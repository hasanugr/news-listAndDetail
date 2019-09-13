import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ListPage from "./views/listPage.jsx";
import DetailPage from "./views/detailPage.jsx";

class App extends Component {
  render () {
    return (
      <Router>
          <Route path="/" exact component={ListPage} />
          <Route path="/detail" component={DetailPage}  />
      </Router>
    );
  }
}

export default App;
