import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import EmailSubmitForm from "./components/email-submit-form"
import EmailList from "./components/email-list"

function App() {
  return (
    <div>

      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">
            Tracy's Email Form
        </a>
        </div>

        <div className="nav-social">
          <a href="https://github.com/chenxuan-zhou" target="_blank">
            @chenxuan-zhou
          </a>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={EmailSubmitForm} />
          <Route exact path="/list" component={EmailList} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
