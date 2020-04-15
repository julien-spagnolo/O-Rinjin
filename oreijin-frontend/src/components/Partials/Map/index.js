import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';


import mapToken from '../../../../mapbox.config';
// == Import
// import './styles.css';

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
    height: '100vh',
    zoom: 12,
  });


  return (
    <div>
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
      />
    </div>
  );
};

// == Export
export default Map;
