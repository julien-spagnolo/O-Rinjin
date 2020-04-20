import React from 'react';
import {
  Container, Segment, Header,
} from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
// import PropTypes from 'prop-types';

import Service from '../../../containers/Service';
import './styles.scss';
import services from '../../../services-visitor';

// TODO: services props
const ServicesList = () => (
  <Container>
    <Segment className="home__connected__services" raised>
      <Header as="h2" dividing textAlign="center" className="home__connected__services__title">Mes Annonces</Header>
      <Segment style={{ height: '100vh', overflowY: 'scroll' }}>
        {
          // Render a Service component for each service in data
          services.map((service) => (
            <Service key={uuid()} {...service} userServices />
          ))
        }
      </Segment>
    </Segment>
  </Container>
);

ServicesList.propTypes = {
  // services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ServicesList;
