import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';


import mapToken from '../../../../mapbox.config';
import mapServices from '../../../map-services';
// == Import
import './styles.scss';
// import 'mapbox-gl/dist/mapbox-gl.css';
import logoMarker from '../../../assets/images/logo.svg';

// TODO hide token api
const mapAccess = {
  mapboxApiAccessToken: mapToken,
};

const Map = () => {
  // state de la map
  const [viewport, setViewport] = useState({
    latitude: 48.866667,
    longitude: 2.333333,
    width: '100%',
    height: '100%',
    zoom: 11,
  });

  const [selectedService, setSelectedService] = useState(null);


  return (
    <ReactMapGL
      {...viewport}
      // token d'accès à l'api
      {...mapAccess}
      // style de la map
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      // Permet de se déplacer sur la map
      onViewportChange={(newViewport) => {
        setViewport(newViewport);
      }}
    >
      {
        mapServices.map((service) => (
          <Marker
            key={service.key}
            latitude={service.latitude}
            longitude={service.longitude}
          >
            <button
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                setSelectedService(service);
              }}
            >
              <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={logoMarker} alt="marqueur" />
            </button>
          </Marker>
        ))
      }
      {
        selectedService ? (
          <Popup
            className="map__popup"
            latitude={selectedService.latitude}
            longitude={selectedService.longitude}
            onClose={() => {
              setSelectedService(null);
            }}
          >
            <div>{selectedService.title}</div>
            <div>Catégorie : {selectedService.category}</div>
            <div>Type : {selectedService.type}</div>
          </Popup>
        ) : null
      }
    </ReactMapGL>
  );
};

// == Export
export default Map;
