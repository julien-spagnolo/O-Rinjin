// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// == Import components that we need to use from Semantic-UI-React
import {
  Grid, Segment, Header, Select, Button, Label,
} from 'semantic-ui-react';

import Service from '../../../containers/Service';
// import services from '../../../services';
import Map from '../../../containers/Map';

// == Import styles and assets
import './styles.scss';

// == Component
const HomeConnected = ({
  getServicesList, services, servicesPostalcode, selectedList, setSelectedList, getServicesListByPostalCode,
  getCategoriesList, categories, filterByCategory,
  servicesResults, servicesPostalCodeResults,
}) => {
  // const dropdownOptionsType = [
  //   {
  //     key: 'Demande',
  //     text: 'Demande',
  //     value: 0,
  //   },
  //   {
  //     key: 'Proposition',
  //     text: 'Proposition',
  //     value: 1,
  //   },
  // ];

  useEffect(() => {
    // console.log('USE EFFECT !');
    getServicesList();
    getServicesListByPostalCode(sessionStorage.getItem('postalcode'));
    getCategoriesList();
  }, []);

  return (
    <Grid>
      <Grid.Row divided>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Segment className="home__connected__services" raised>
            <Header as="h2" dividing textAlign="center" className="home__connected__services__title">ANNONCES</Header>
            <div className="home__connected__services__filter">
              <Select
                onChange={(evt, { value }) => filterByCategory(value)}
                placeholder="Filtre par catégorie"
                options={categories}
                clearable
              />
              {
                (servicesPostalCodeResults || servicesResults) ? (
                  <Label>
                    Ma zone: {servicesPostalCodeResults} résultat(s) | Toutes: {servicesResults} résultat(s)
                  </Label>
                ) : null
              }
              {/* <Select
                onChange={(evt, { value }) => console.log('change type : ', value)}
                placeholder="Filtre par type"
                options={dropdownOptionsType}
                clearable
              /> */}
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
          <Segment style={{ width: '1OO%', height: '100vh', padding: '0' }} className="home__connected__map" raised>
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
  categories: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  servicesResults: PropTypes.number.isRequired,
  servicesPostalCodeResults: PropTypes.number.isRequired,
  selectedList: PropTypes.bool.isRequired,
  setSelectedList: PropTypes.func.isRequired,
  getServicesListByPostalCode: PropTypes.func.isRequired,
  getCategoriesList: PropTypes.func.isRequired,
  filterByCategory: PropTypes.func.isRequired,
};

// == Export
export default HomeConnected;
