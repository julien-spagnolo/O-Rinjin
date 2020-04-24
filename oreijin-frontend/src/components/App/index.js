// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components from react-router
import { Switch, Route } from 'react-router-dom';

// == Import components
import ProtectedRoute from './ProtectedRoute';
import Header from '../../containers/Header';
import Footer from '../Layout/Footer';
import Home from '../../containers/Home';
import HomeConnected from '../../containers/HomeConnected';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import AddService from '../../containers/AddService';
import UpdateService from '../../containers/UpdateService';
import ServicesList from '../../containers/ServicesList';
import ServiceDetails from '../../containers/ServiceDetails';
import Profil from '../../containers/Profil';

import Team from '../Layout/Team';
import LegalMentions from '../Layout/LegalMentions';

// == Import styles and assets
import './styles.scss';

// == Component
const App = ({ checkAuth }) => {
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="app">
      <Header />
      {/* Switch component: renders the first <Route> that matches the location  */}
      <Switch>
        {/* Render a component when its path matches the current URL */}
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/home" component={HomeConnected} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/legal-mentions" component={LegalMentions} />
        <ProtectedRoute exact path="/service/add" component={AddService} />
        <ProtectedRoute exact path="/service/edit/:slug" component={UpdateService} />
        <ProtectedRoute exact path="/service/:slug" component={ServiceDetails} />
        <ProtectedRoute exact path="/:user" component={Profil} />
        <ProtectedRoute exact path="/:user/services" component={ServicesList} />
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  checkAuth: PropTypes.func.isRequired,
};

// == Export
export default App;
