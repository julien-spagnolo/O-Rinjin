import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Segment, Form, TextArea, Feed, Icon } from 'semantic-ui-react';

import logo from '../../../assets/images/logo.png';

const ServiceDetails = ({ service }) => {
  console.log(service);
  return(
    <Container text>
      <Segment>
      <Header as="h1">{service.title}</Header>
      Service Details - {service.id} {service.title}
      <Feed>
        <Feed.Event>
          <Feed.Label image={logo} />
          <Feed.Content>
            <Feed.Summary>
              <a>Nom du membre</a>
              <Feed.Date>Date de l'envoi du message</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              Réponse à un service pour prendre contact avec la personne
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
      <Form>
        <TextArea placeholder="Répondre à l'annonce" />
      </Form>
      </Segment>
    </Container>
  );
};

ServiceDetails.propTypes = {
   service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceDetails;
