// == Import npm
import React from 'react';
// == Import components that we need to use from Semantic-UI-React
import { Grid, Segment, Header } from 'semantic-ui-react';

import Service from '../../Partials/Service';
import services from '../../../services';
import Map from '../../Partials/Map';

// == Import styles and assets
import './styles.scss';

// == Component
const HomeConnected = () => (
  <Grid>
    <Grid.Row divided>
      <Grid.Column mobile={16} tablet={16} computer={9}>
        <Segment className="home__connected__services" raised>
          <Header as="h2" dividing textAlign="center" className="home__connected__services__title">ANNONCES</Header>
          <div className="home__connected__services__filter">Emplacement des filtres</div>
          <Segment style={{ height: '100vh', overflowY: 'scroll' }}>
            {
              // Render a Service component for each service in data
              services.map(({ title, description, type }) => (
                <Service key={title} title={title} description={description} type={type} />
              ))
            }
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={16} computer={7}>
        <Segment style={{ height: '100vh', overflow: 'hidden' }} className="home__connected__map" raised>
          <Map />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

// == Export
export default HomeConnected;
