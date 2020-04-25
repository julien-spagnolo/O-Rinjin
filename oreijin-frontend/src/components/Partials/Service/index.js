// == Import npm
import React from 'react';
import slugify from 'slugify';
// == Import components that we need to use from Semantic-UI-React
import {
  Feed, Segment, Icon, Responsive, Button, Grid, Image, Divider, Header,
  Label,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// == import prop-types library for prop types validation
import PropTypes from 'prop-types';

import auth from '../../../auth';
// == Import styles and assets
import './styles.scss';
import logo from '../../../assets/images/logo.svg';

// == Component
const Service = ({
  isLogged, id, title, body, type,
  slug, userServices, onDeleteService, serviceCategory, user,
}) => (
  <Feed as={Segment}>
    <Grid stackable>
      {/* If we are in user services page : column will take width: 12 */}
      {/* Else, column will take all the width  */}
      <Grid.Column width={userServices ? 12 : 16}>
        <Header as="h4">
          <Image size="mini" src={logo} circular />
          <Header.Content
            as={Link}
            to={`/${slugify(`${user.firstName} ${user.lastName} ${user.id}`, { lower: true })}`}
          >
            {`${user.firstName} ${user.lastName}`}
          </Header.Content>
        </Header>
        <Feed.Event
          as={Link}
          to={auth.isAuthenticated() ? `/service/${slug}` : '/'}
        >
          <Feed.Content>
            <Feed.Summary className="service__title">
              {title}
              {/* <Feed.User>{` - ${created_by}`}</Feed.User> */}
            </Feed.Summary>
            <Feed.Extra text className="service__category">
              <Label>
                {type ? 'Proposition' : 'Demande'}
              </Label>
              <Label>
                { serviceCategory.title }
              </Label>
            </Feed.Extra>
            <Responsive as={Feed.Extra} text minWidth={550}>
              <Divider className="service__info__divider" horizontal>
                <Header as="h5">
                  Description
                </Header>
              </Divider>
              {body}
            </Responsive>
            <Feed.Meta style={{ marginTop: '1rem' }}>
              <Icon name="map marker alternate" />{ user.postalCode }
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Grid.Column>
      {
        // Display buttons only on user services page
        userServices && (
          <Grid.Column width={4} textAlign="right">
            <Button as={Link} to={`/service/edit/${slug}`} className="user__services__edit" size="tiny" icon><Icon name="edit" /></Button>
            <Button
              color="red"
              size="tiny"
              icon
              onClick={() => onDeleteService(id)}
            >
              <Icon name="delete" />
            </Button>
          </Grid.Column>
        )
      }
    </Grid>
  </Feed>
);

// Default props declaration for optionnal props
Service.defaultProps = {
  slug: '',
  userServices: false,
};

// == Props types validation
Service.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
  // category: PropTypes.string.isRequired,
  // pc: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  onDeleteService: PropTypes.func.isRequired,
  slug: PropTypes.string,
  userServices: PropTypes.bool,
  user: PropTypes.object.isRequired,
  serviceCategory: PropTypes.object.isRequired,
};

// == Export
export default Service;
