import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import LoginContainer from "../LoginContainer";
import Header from "../../components/Header";
import VacationsContainer from "../VacationsContainer";
import RegisterContainer from "../RegisterContainer";
import DashboardContainer from "../DashboardContainer";
import history from '../../history';

export default class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={VacationsContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/register" component={RegisterContainer} />
              <Route path="/vacations" component={VacationsContainer} />
              <Route path="/dashboard" component={DashboardContainer} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
