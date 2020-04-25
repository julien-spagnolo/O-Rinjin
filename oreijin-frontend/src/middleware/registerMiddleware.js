/* eslint-disable camelcase */
import axios from 'axios';
import slugify from 'slugify';
import {
  HANDLE_SUBMIT, loading, handleSubmitSuccess,
  updateLocation, updateLocationError,
} from '../actions/register';
import baseURL from '../axios';

import mapboxApiToken from '../../mapbox.config';

const registerMiddleware = (store) => (next) => (action) => {
  const { address, city, postalcode } = store.getState().register.form;
  const query = slugify(`${address} ${city}`, '%20');

  switch (action.type) {
    case HANDLE_SUBMIT:
      store.dispatch(loading());

      axios({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?&country=FR&postcode=${postalcode}&access_token=${mapboxApiToken}`,
        method: 'get',
      })
        .then((response) => {
          // console.log(response.data);
          const coords = response.data.features[0].geometry.coordinates;
          store.dispatch(updateLocation({
            longitude: `${coords[0]}`,
            latitude: `${coords[1]}`,
          }));
          console.log(store.getState().register.form);

          axios({
            url: `${baseURL}/register`,
            method: 'post',
            data: {
              ...store.getState().register.form,
              avatar: '',
            },
          })
            .then(() => {
              store.dispatch(handleSubmitSuccess());
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(() => {
          store.dispatch(updateLocationError());
        });

      return next(action);
    default:
      return next(action);
  }
};

export default registerMiddleware;
