import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeVisitor from './HomeVisitor';
import auth from '../../auth';
import './styles.scss';

const Home = ({ isLogged }) => (
  <div className="home">
    {/* A changer !!!! !isLogged -> isLogged  */}
    {auth.isAuthenticated() ? <Redirect to="/home" /> : <HomeVisitor />}
  </div>
);

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Home;
