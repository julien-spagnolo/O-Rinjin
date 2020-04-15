/* eslint-disable camelcase */
import axios from 'axios';
import slugify from 'slugify';
import { HANDLE_SUBMIT, updateLocation, updateLocationError } from '../actions/register';

const mapboxApiToken = 'pk.eyJ1Ijoibm91Z2F6YWtpIiwiYSI6ImNrOG9uaG90NjA0MWEzZ242OWY5Z3o2ZGoifQ.lMw3p6r7TW0oBoxfMrzpFA';

const registerMiddleware = (store) => (next) => (action) => {
  const { address, city, postalcode } = store.getState().register.form;
  const query = slugify(`${address} ${city}`, '%20');

  switch (action.type) {
    case HANDLE_SUBMIT:
      axios({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?&country=FR&postcode=${postalcode}&access_token=${mapboxApiToken}`,
        method: 'get',
      })
        .then((response) => {
          // console.log(response.data);
          const coords = response.data.features[0].geometry.coordinates;
          store.dispatch(updateLocation({
            longitude: coords[0],
            latitude: coords[1],
          }));

          axios({
            url: 'http://localhost:8000/register',
            method: 'post',
            data: {
              ...store.getState().register.form,
              avatar: '',
            },
          })
            .then((res) => {
              console.log(res.data);
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
