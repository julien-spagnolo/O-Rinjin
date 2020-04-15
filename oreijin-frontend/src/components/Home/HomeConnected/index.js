// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import { Grid, Card, Container } from 'semantic-ui-react';

import Service from '../../Partials/Service';
import services from '../../../services';
import Map from '../../Partials/Map';

// == Import styles and assets
import './styles.scss';

// == Component
const HomeConnected = () => (
  <Grid as={Container} fluid className="home__connected" columns={2} stretched>
    <Grid.Column className="home__connected__services" textAlign="center" mobile={16} tablet={9} computer={9}>
      <h2 className="home__connected__services__title">ANNONCES</h2>
      <div className="home__connected__services__filter">Emplacement des filtres</div>
      <Card.Group itemsPerRow="1">
        {
          // Render a Service component for each service in data
          services.map(({ title, description, type }) => (
            <Service key={title} title={title} description={description} type={type} />
          ))
        }
      </Card.Group>
    </Grid.Column>
    <Grid.Column className="home__connected__map" textAlign="center" mobile={16} tablet={7} computer={7}>
      <Map />
    </Grid.Column>
  </Grid>
);

// == Export
export default HomeConnected;
