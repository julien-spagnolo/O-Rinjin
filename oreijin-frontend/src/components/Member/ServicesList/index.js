import React, { useEffect } from 'react';
import slugify from 'slugify';
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
  setIsSuccessFalse,
}) => {
  useEffect(() => {
    // TODO : replace getServicesList with getUserServices
    getUserServicesList();
  }, []);

  useEffect(() => {
    getUserServicesList();
  }, [isSuccess]);

  const delayedHideMessage = () => {
    // eslint-disable-next-line no-unused-vars
    const timeoutId = setTimeout(() => {
      console.log('set time out detected');
      setIsSuccessFalse();
    }, 3000);
  };

  return (
    <Container>
      <Segment className="home__connected__services" raised>
        <Header as="h2" dividing textAlign="center" className="home__connected__services__title">Mes Annonces</Header>
        {/* <Message success hidden={!isSuccess} content="Le service a bien été supprimé." /> */}
        {
          isSuccess && delayedHideMessage()
        }
        <Message
          success
          hidden={!isSuccess}
          header="Création d'un service réussi !"
          content="Vous n'avez plus qu'a attendre une réponse d'un de nos utilisateurs !"
        />
        <Message error hidden={!isError} content="Une erreur est survenue lors de la suppression du service." />
        {
          services.length === 0 ? 'Vous n\'avez créé aucun service.' : (
            <Segment style={{ height: '100vh', overflowY: 'scroll' }}>
              {
                // Render a Service component for each service in data
                services.length !== 0 && services.map((service) => (
                  <Service key={uuid()} {...service} userServices slug={slugify(`${service.id} ${service.title}`, { lower: true })} />
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
  setIsSuccessFalse: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default ServicesList;
