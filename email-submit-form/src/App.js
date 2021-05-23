import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import EmailSubmitForm from "./components/email-submit-form"

function App() {
  return (
    <div>

      <nav className="navbar">
        <a href="/" className="navbar-brand">
          Tracy's Email Form
        </a>
        <div className="nav-social"> 
          <a href="https://github.com/chenxuan-zhou" target="_blank">
            @chenxuan-zhou
          </a>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={EmailSubmitForm} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
