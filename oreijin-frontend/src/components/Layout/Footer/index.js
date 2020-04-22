// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import {
  Menu, Container, Grid, Divider,
} from 'semantic-ui-react';
// == Import NavLink from react-router-dom
import { NavLink } from 'react-router-dom';

// == Import styles and assets
import './styles.scss';

// == Component
const Footer = () => (
  <div className="footer">
    <Container>
      <Divider />
      <Grid columns={3}>
        <Grid.Column>
          <Menu secondary text vertical>
            <Menu.Item>
              <NavLink exact to="/team">Notre équipe</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink exact to="/legal-mentions">Mentions Légales</NavLink>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column textAlign="center">
          Copyright © - All rights reserved ...
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Menu className="footer__networks" secondary icon stackable>
            <Menu.Item href="https://www.facebook.com" target="_blank" icon="facebook f" />
            <Menu.Item href="https://twitter.com" target="_blank" icon="twitter" />
            <Menu.Item href="https://www.youtube.com" target="_blank" icon="youtube" />
          </Menu>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

// == Export
export default Footer;
