import React, { useEffect } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

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
            <button
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                setSelectedService(service);
              }}
            >
              <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={service.user.avatar ? service.user.avatar : logoMarker} alt="marqueur" />
            </button>
          </Marker>
        ))
      }
      {
        selectedService ? (
          <Popup
            className="map__popup"
            latitude={parseFloat(selectedService.user.latitude)}
            longitude={parseFloat(selectedService.user.longitude)}

            onClose={() => {
              console.log('clic sur le popup WIP');
            }}
          >
            <div>{selectedService.title}</div>
            <div>{selectedService.type ? 'Demande' : 'Proposition'} - {selectedService.serviceCategory.title}</div>
          </Popup>
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
