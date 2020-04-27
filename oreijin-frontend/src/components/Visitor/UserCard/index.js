// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import { Card } from 'semantic-ui-react';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

// == Import styles and assets
import './styles.scss';
import logo from '../../../assets/images/logo.png';

// == Component
const UserCard = ({ firstName }) => (
  <Card
    image={logo}
    header={firstName}
    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
  />
);

// == Props types validation
UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
};

// == Export
export default UserCard;
