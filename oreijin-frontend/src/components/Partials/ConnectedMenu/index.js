import React from 'react';
import PropTypes from 'prop-types';

import { Button, Image, Grid, Icon } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import './styles.scss';

const ConnectedMenu = ({ logout }) => (
  <Grid columns={3} className="header__container__connected">
    <Grid.Row>
      <Grid.Column width="6" className="header__navlink__group" verticalAlign="middle" textAlign="right">
        <NavLink to="/home" activeClassName="active" className="header__navlink">Accueil</NavLink>
        <NavLink to="/login" activeClassName="active" className="header__navlink">Profil</NavLink>
        <NavLink to="/register" activeClassName="active" className="header__navlink">Mes services</NavLink>
      </Grid.Column>
      
      <Grid.Column width="4" className="header__logo__connected" textAlign="center">
        <Image as={Link} to="/" className="header__logo" src={logo} centered size="small" />
      </Grid.Column>
      
      <Grid.Column width="6" className="header__logo__connected" verticalAlign="middle">
        <Button as={Link} to="/login" className="header__button__connected" size="small">
          <Button.Content>Créer un service</Button.Content>
        </Button>
        <Button
          as={Link}
          to="/"
          className="header__button__connected"
          size="small"
          icon
          onClick={logout}
        >
          {/* <Button.Content icon="log out" visible></Button.Content> */}
            <Icon name="log out"/>
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

ConnectedMenu.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default ConnectedMenu;
