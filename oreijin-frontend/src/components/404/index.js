// == Import npm
import React from 'react';

// == import prop-types library for prop types validation
import { Container } from 'semantic-ui-react';
// == Import styles and assets
import './styles.scss';
import logo from '../../assets/images/logo.png';

// == Component
const Page404 = () => (
  <Container>
    <h1>Désolé, pas de page ici</h1>
    <img src={logo} alt="logo" />
  </Container>
);

// == Export
export default Page404;
