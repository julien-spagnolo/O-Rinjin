/* eslint-disable camelcase */
import axios from 'axios';
import slugify from 'slugify';
import { HANDLE_SUBMIT, updateLocation } from '../actions/register';

const mapboxApiToken = 'pk.eyJ1Ijoibm91Z2F6YWtpIiwiYSI6ImNrOG9uaG90NjA0MWEzZ242OWY5Z3o2ZGoifQ.lMw3p6r7TW0oBoxfMrzpFA';

const registerMiddleware = (store) => (next) => (action) => {
  const { address, city, postal_code } = store.getState().register.form.location;
  const query = slugify(`${address} ${city}`, '%20');

  switch (action.type) {
    case HANDLE_SUBMIT:
      axios({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?&country=FR&postcode=${postal_code}&access_token=${mapboxApiToken}`,
        method: 'get',
      })
        .then((response) => {
          // console.log(response.data);
          const coords = response.data.features[0].geometry.coordinates;
          // console.log(coords);
          store.dispatch(updateLocation({
            longitude: coords[0],
            latitude: coords[1],
          }));
        });

      return next(action);
    default:
      return next(action);
  }
};

export default registerMiddleware;
