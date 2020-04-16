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
const Service = ({ isLogged, title, description, type, category, pc, created_by }) => (
  <Feed as={Segment}>
    <Feed.Event
      as={Link}
      to="bidon"
    >
      <Feed.Content>
        <Feed.Summary className="service__title">
          {title}
          {/* <Feed.User>{` - ${created_by}`}</Feed.User> */}
        </Feed.Summary>
        <Feed.Extra text className="service__category">
          {type} - {category}
        </Feed.Extra>
        <Feed.Extra text>
          {description}
        </Feed.Extra>
        <Feed.Meta>
          <Icon name="map marker alternate" />{pc}
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

// == Props types validation
Service.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  pc: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default Service;
