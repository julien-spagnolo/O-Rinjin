// == Import npm
import React, { useEffect } from 'react';
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
  id, index, getComment, comments,
}) => {
  useEffect(() => {
    console.log('//= useEffect comment');
    getComment({
      index,
      id,
    });
  }, []);

  return (
    <Comment>
      <Comment.Avatar src={logo} />
      <Comment.Content>
        <Comment.Author>Reijin 1</Comment.Author>
        <Comment.Metadata>
          <Comment.Text>
            3 days ago
          </Comment.Text>
        </Comment.Metadata>
        <Comment.Text>Test</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

Response.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  getComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
// == Export
export default Response;
