import React from 'react';

import { Link } from 'react-router-dom';

import { Dropdown } from 'semantic-ui-react';

const ConnectedDropdown = () => (
  <Dropdown direction="left" text="Menu">
    <Dropdown.Menu>
      <Dropdown.Item as={Link} to="/home" text="Accueil" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="" text="Profil" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="" text="Mes services" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="" text="Créer un service" />
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="" text="Se déconnecter" />
    </Dropdown.Menu>
  </Dropdown>
);

export default ConnectedDropdown;
