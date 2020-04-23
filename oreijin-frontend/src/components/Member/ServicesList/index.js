import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Segment, Header, Message,
} from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
// import PropTypes from 'prop-types';

import Service from '../../../containers/Service';
import './styles.scss';
// import services from '../../../services-visitor';

// TODO: services props
const ServicesList = ({
  getUserServicesList, services,
  isSuccess, isError,
}) => {
  useEffect(() => {
    // TODO : replace getServicesList with getUserServices
    getUserServicesList();
  }, []);

  useEffect(() => {
    getUserServicesList();
  }, [isSuccess]);

  return (
    <Container>
      <Segment className="home__connected__services" raised>
        <Header as="h2" dividing textAlign="center" className="home__connected__services__title">Mes Annonces</Header>
        <Message success hidden={!isSuccess} content="Le service a bien été supprimé." />
        <Message error hidden={!isError} content="Une erreur est survenue lors de la suppression du service." />
        {
          services.length === 0 ? 'Vous n\'avez créé aucun service.' : (
            <Segment style={{ height: '100vh', overflowY: 'scroll' }}>
              {
                // Render a Service component for each service in data
                services.map((service) => (
                  <Service key={uuid()} {...service} userServices />
                ))
              }
            </Segment>
          )
        }
      
      </Segment>
    </Container>
  );
};

ServicesList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  getUserServicesList: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default ServicesList;
