// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components from react-router
import { Switch, Route } from 'react-router-dom';

// == Import components
import Header from '../../containers/Header';
import Footer from '../Layout/Footer';
import Home from '../../containers/Home';
import HomeConnected from '../../containers/HomeConnected';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import FormServices from '../../containers/FormServices';
import ServicesList from '../Member/ServicesList';
import Profil from '../Member/Profil';

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
        <Route exact path="/home" component={HomeConnected} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/service/add" component={FormServices} />
        <Route exact path="/user" component={Profil} />
        <Route exact path="/user/services" component={ServicesList} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/legal-mentions" component={LegalMentions} />
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
