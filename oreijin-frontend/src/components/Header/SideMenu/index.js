// == Import npm
import React from 'react';
import {
  Sidebar, Menu, Segment, Route,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import Main from '../../Main';

// == Import


// WIP
const SideMenu = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="overlay"
      direction="top"
      icon="labeled"
      visible
    >
      <Menu.Item as={Link} to="/" text="Connexion" />
      <Menu.Item as={Link} to="/" text="Inscription" />
    </Sidebar>
    <Sidebar.Pusher>
      <Route path="/" component={Main} />
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

// == Export
export default SideMenu;
