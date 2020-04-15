// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import { Grid } from 'semantic-ui-react';

// == Import styles and assets
import './styles.scss';

// == Component
const HomeConnected = () => (
  <Grid className="home__connected" columns={2} divided>
    <Grid.Column className="home__connected__services" textAlign="center" mobile={16} tablet={9} computer={9}>
      <div className="home__connected__services__filter">Emplacement des filtres</div>
      <h2>ANNONCES</h2>
      <div>Emplacement des différentes annonces</div>
    </Grid.Column>
    <Grid.Column textAlign="center" mobile={16} tablet={7} computer={7}>
      <h2>MAP</h2>
      <div>Emplacement de la map</div>
    </Grid.Column>
  </Grid>

);

// == Export
export default HomeConnected;
