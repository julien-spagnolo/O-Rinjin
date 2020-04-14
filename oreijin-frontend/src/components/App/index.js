// == Import npm
import React from 'react';
// == Import components from react-router
import { Switch, Route } from 'react-router-dom';

// == Import components
import Header from '../Header';
import Footer from '../Layout/Footer';
import HomeVisitor from '../Main/HomeVisitor';
// import HomeConnected from '../Main/HomeConnected';
import Connexion from '../../containers/Login';
import Register from '../../containers/Register';

import Team from '../Layout/Team';
import LegalMentions from '../Layout/LegalMentions';

// == Import styles and assets
import './styles.scss';

// == Component
const App = () => (
  <div className="app">
    <Header />
    {/* Switch component: renders the first <Route> that matches the location  */}
    <Switch>
      {/* Render a component when its path matches the current URL */}
      <Route exact path="/" component={HomeVisitor} />
      {/* <Route exact path="/" component={HomeConnected} /> */}
      <Route exact path="/login" component={Connexion} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/legal-mentions" component={LegalMentions} />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
