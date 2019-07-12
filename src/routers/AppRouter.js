import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LatestQuakes from '../components/LatestQuakes';
import NotFoundPage from '../components/NotFoundPage';
import QuakeDetails from "../components/QuakeDetails";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="/latest" component={LatestQuakes} />
          <Route path="/details/:id" component={QuakeDetails} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer/>

    </div>
  </BrowserRouter>
);

export default AppRouter;
