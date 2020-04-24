import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeVisitor from '../Home/HomeVisitor';

import './styles.scss';

const Home = ({ isLogged }) => (
  <div className="home">
    {/* A changer !!!! !isLogged -> isLogged  */}
    {isLogged ? <Redirect to="/home" /> : <HomeVisitor />}
  </div>
);

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Home;
