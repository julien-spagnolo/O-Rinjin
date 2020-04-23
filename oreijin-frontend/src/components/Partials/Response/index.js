// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import {
  Comment,
} from 'semantic-ui-react';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

// == Import styles and assets
// import './styles.scss';
import logo from '../../../assets/images/logo.svg';

// == Component
const Response = ({
  body, id,
}) => (
  <Comment>
    <Comment.Avatar src={logo} />
    <Comment.Content>
      <Comment.Author>Rinjin Anonyme</Comment.Author>
      <Comment.Metadata>
      </Comment.Metadata>
      <Comment.Text>
        {body}
      </Comment.Text>
    </Comment.Content>
  </Comment>
);


Response.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
};
// == Export
export default Response;
