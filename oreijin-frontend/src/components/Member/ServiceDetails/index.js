import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

const ServiceDetails = ({ service }) => {
  console.log(service);

  return(
    <Container text>Service Details - {service.id} {service.title}</Container>
  );
};

ServiceDetails.propTypes = {
   service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceDetails;
