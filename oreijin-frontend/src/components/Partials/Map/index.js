import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';


import mapToken from '../../../../mapbox.config';
// == Import
// import './styles.css';
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
      {/* map.services ....  */}
      <Marker
        key="1"
        latitude={48.866667}
        longitude={2.333333}
      >
        <img style={{width: '50px', height: '50px', borderRadius: '50%'}} src={logoMarker} alt="marqueur" />
      </Marker>
      <Marker
        key="2"
        latitude={48.866456}
        longitude={2.4}
      >
        <img style={{width: '50px', height: '50px', borderRadius: '50%'}} src={logoMarker} alt="marqueur" />
      </Marker>
      <Marker
        key="3"
        latitude={48.80987}
        longitude={2.3234}
      >
        <img src="https://i.imgur.com/MK4NUzI.png" alt="marqueur" />
      </Marker>
      <Marker
        key="4"
        latitude={48.8347}
        longitude={2.3675}
      >
        <img src="https://i.imgur.com/MK4NUzI.png" alt="marqueur" />
      </Marker>
      <Marker
        key="5"
        latitude={48.89990}
        longitude={2.3675}
      >
        <img src="https://i.imgur.com/MK4NUzI.png" alt="marqueur" />
      </Marker>
    </ReactMapGL>
  );
};

// == Export
export default Map;
