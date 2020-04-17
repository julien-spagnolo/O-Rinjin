import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Dropdown } from 'semantic-ui-react';

const ConnectedDropdown = ({ logout, user }) => (
  <Dropdown direction="left" text="Menu">
    <Dropdown.Menu>
      <Dropdown.Item as={Link} to="/home" text="Accueil" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to={`/${user}`} text="Profil" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to={`/${user}/services`} text="Mes services" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="/service/add" text="Créer un service" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="/" text="Se déconnecter" onClick={logout} />
    </Dropdown.Menu>
  </Dropdown>
);

ConnectedDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default ConnectedDropdown;
