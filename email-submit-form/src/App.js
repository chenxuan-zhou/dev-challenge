import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import EmailSubmitForm from "./components/email-submit-form"

function App() {
  return (
    <div>

      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Tracy's Email Form
        </a>
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
