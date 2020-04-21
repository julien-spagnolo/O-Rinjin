// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import {
  Comment,
} from 'semantic-ui-react';
// == import prop-types library for prop types validation
// import PropTypes from 'prop-types';

// == Import styles and assets
// import './styles.scss';
import logo from '../../../assets/images/logo.svg';

// == Component
const Response = () => (
  <Comment>
    <Comment.Avatar src={logo} />
    <Comment.Content>
      <Comment.Author>Reijin 1</Comment.Author>
      <Comment.Metadata>
        <Comment.Text>
          3 days ago
        </Comment.Text>
      </Comment.Metadata>
      <Comment.Text>Réponse ...</Comment.Text>
    </Comment.Content>
  </Comment>
);

// == Export
export default Response;
