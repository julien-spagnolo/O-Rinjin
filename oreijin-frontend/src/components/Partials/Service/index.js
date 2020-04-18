// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import { Feed, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

// == Import styles and assets
import './styles.scss';

// == Component
const Service = ({ isLogged, title, body, type, createdAT, uuid }) => (
  <Feed as={Segment}>
    <Feed.Event
      as={Link}
      to={`/service/${uuid}`}
    >
      <Feed.Content>
        <Feed.Summary className="service__title">
          {title}
          {/* <Feed.User>{` - ${created_by}`}</Feed.User> */}
        </Feed.Summary>
        <Feed.Extra text className="service__category">
          {type ? 'Demande' : 'Proposition'} - Catégorie
        </Feed.Extra>
        <Feed.Extra text>
          {body}
        </Feed.Extra>
        <Feed.Meta>
          <Icon name="map marker alternate" />69440 - créée le {createdAT}
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

// == Props types validation
Service.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
  // category: PropTypes.string.isRequired,
  // pc: PropTypes.string.isRequired,
  createdAT: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  uuid: PropTypes.string.isRequired,
};

// == Export
export default Service;
