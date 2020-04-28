import React, { useEffect } from 'react';
import slugify from 'slugify';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { Link } from 'react-router-dom';
import {
  Label, Segment, Container, Header,
} from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import Service from '../../../containers/Service';
import mapToken from '../../../../mapbox.config';

// == Import
import './styles.scss';
// import 'mapbox-gl/dist/mapbox-gl.css';
import logoMarker from '../../../assets/images/logo.svg';

// TODO hide token api
const mapAccess = {
  mapboxApiAccessToken: mapToken,
};

const Map = ({
  viewport, services, onChangeViewport, setSelectedService, selectedService,
}) => {
  // const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
  }, [viewport, services]);

  return (
    <ReactMapGL
      {...viewport}
      // token d'accès à l'api
      {...mapAccess}
      // style de la map
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      // Permet de se déplacer sur la map
      onViewportChange={(newViewport) => {
        onChangeViewport(newViewport);
      }}
    >
      <div style={{ position: 'absolute', right: 0, margin: '1rem' }}>
        <NavigationControl />
      </div>
      {
        services.length !== 0 && services.map((service) => (
          <Marker
            key={uuid()}
            latitude={parseFloat(service.user.latitude)}
            longitude={parseFloat(service.user.longitude)}
          >
            {/* <button
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                setSelectedService(service);
              }}
            >
            </button> */}
            <div
              onClick={(evt) => {
                evt.preventDefault();
                setSelectedService(service);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                src={logoMarker}
                alt="marqueur"
              />
            </div>
          </Marker>
        ))
      }
      {
        selectedService ? (
          <div
            className="map__popup"
            onClick={() => {
              console.log('clic sur le popup WIP');
            }}
          >
            {/* <div>{selectedService.title}</div>
            <div>
              <Label>{selectedService.type ? 'Proposition' : 'Demande'}</Label>
              <Label>{selectedService.serviceCategory.title}</Label>
            </div>
            <div>Posté par {selectedService.user.firstName + ' ' + selectedService.user.lastName}</div>
            <Link to={}></Link> */}
            <Service
              key={`${selectedService.title}-marker`}
              {...selectedService}
              slug={slugify(`${selectedService.id} ${selectedService.title}`, { lower: true })}
            />
          </div>
        ) : null
      }
    </ReactMapGL>
  );
};

Map.defaultProps = {
  selectedService: null,
};

Map.propTypes = {
  viewport: PropTypes.object.isRequired,
  services: PropTypes.array.isRequired,
  onChangeViewport: PropTypes.func.isRequired,
  setSelectedService: PropTypes.func.isRequired,
  selectedService: PropTypes.object,
};

// == Export
export default Map;
