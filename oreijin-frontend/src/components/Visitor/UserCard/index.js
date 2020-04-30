// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import { Card, Image } from 'semantic-ui-react';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

// == Import styles and assets
import './styles.scss';
import logo from '../../../assets/images/logo.png';

// == Component
const UserCard = ({ firstName, avatar }) => (
  <Card>
    <Image style={{ height: '250px' }} src={avatar || logo} ui={false} />
    <Card.Content>
      <Card.Header>{firstName}</Card.Header>
      <Card.Description>
        Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.
      </Card.Description>
    </Card.Content>
  </Card>
);

UserCard.defaultProps = {
  avatar: '',
};

// == Props types validation
UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

// == Export
export default UserCard;
