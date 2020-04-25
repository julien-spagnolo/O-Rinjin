// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// == Import components that we need to use from Semantic-UI-React
import {
  Grid, Segment, Header, Select, Button,
} from 'semantic-ui-react';

import Service from '../../../containers/Service';
// import services from '../../../services';
import Map from '../../../containers/Map';

// == Import styles and assets
import './styles.scss';

// == Component
const HomeConnected = ({
  getServicesList, services, servicesPostalcode, selectedList, setSelectedList, getServicesListByPostalCode,
}) => {
  const dropdownOptions = [
    {
      key: 'Aide à domicile',
      text: 'Aide à domicile',
      value: 0,
      type: 'Demande',
    },
    {
      key: 'Bricolage et dépannage',
      text: 'Bricolage et dépannage',
      value: 1,
      type: 'Proposition',
    },
    {
      key: 'Aide à la mobilité',
      text: 'Aide à la mobilité',
      value: 2,
      type: 'Demande',
    },
  ];

  useEffect(() => {
    // console.log('USE EFFECT !');
    getServicesList();
    getServicesListByPostalCode(sessionStorage.getItem('postalcode'));
  }, []);

  return (
    <Grid>
      <Grid.Row divided>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Segment className="home__connected__services" raised>
            <Header as="h2" dividing textAlign="center" className="home__connected__services__title">ANNONCES</Header>
            <div className="home__connected__services__filter">
              <Select placeholder="Filtre par catégorie" options={dropdownOptions} />
              <Select placeholder="Filtre par type" options={dropdownOptions} />
            </div>
            <Button.Group fluid>
              <Button
                onClick={() => {
                  setSelectedList(false);
                }}
              >
                Ma zone
              </Button>
              <Button.Or text="ou" />
              <Button
                onClick={() => {
                  setSelectedList(true);
                }}
              >
                Toutes
              </Button>
            </Button.Group>
            <Segment style={{ height: '100vh', overflowY: 'scroll' }}>
              {
                // Render a Service component for each service in data
                selectedList && services.map((service) => (
                  <Service key={service.id} {...service} />
                ))
              }
              {
                !selectedList && servicesPostalcode.map((service) => (
                  <Service key={service.id} {...service} />
                ))
              }
            </Segment>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Segment style={{ height: '100vh', padding: '0' }} className="home__connected__map" raised>
            <Map />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

HomeConnected.propTypes = {
  getServicesList: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  servicesPostalcode: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  selectedList: PropTypes.bool.isRequired,
  setSelectedList: PropTypes.func.isRequired,
};

// == Export
export default HomeConnected;
