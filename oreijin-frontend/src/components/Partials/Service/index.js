// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import { Card } from 'semantic-ui-react';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

// == Import styles and assets
import './styles.scss';

// == Component
const Service = ({ title, description, type }) => (
  <Card
    fluid
    header={title}
    meta={type}
    description={description}
  />
);

// == Props types validation
Service.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// == Export
export default Service;
