/* eslint-disable camelcase */
import slugify from 'slugify';
import axios from 'axios';
import baseURL from '../axios';
import {
  GET_USER, getUserSuccess, getUserError,
  UPDATE_PROFILE, updateProfileSuccess, updateProfileError,
  GET_USER_SERVICES_LIST, getUserServicesListSuccess, getUserServicesListError,
} from '../actions/user';
import { resetNotFound } from '../actions/error404';
import mapboxApiToken from '../../mapbox.config';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER:
      // console.log(action.payload);
      store.dispatch(resetNotFound());
      axios({
        method: 'get',
        url: `${baseURL}/api/users/${action.payload}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(getUserSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getUserError());
        });
      break;
    case UPDATE_PROFILE:
      axios({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${slugify(`${store.getState().user.profileForm.address} ${store.getState().user.profileForm.city}`, '%20')}.json?&country=FR&postcode=${store.getState().user.profileForm.postalcode}&access_token=${mapboxApiToken}`,
        method: 'get',
      })
        .then((response) => {
          // We get gps location from JSON response
          const coords = response.data.features[0].geometry.coordinates;

          // Coordinates update in sessionStorage
          sessionStorage.setItem('longitude', `${coords[0]}`);
          sessionStorage.setItem('latitude', `${coords[1]}`);

          axios({
            method: 'put',
            url: `${baseURL}/api/users/${store.getState().user.profile.id}`,
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
            data: {
              ...store.getState().user.profileForm,
              longitude: `${coords[0]}`,
              latitude: `${coords[1]}`,
            },
            withCredentials: true,
          })
            .then((res) => {
              // console.log(res.data);
              // update user address
              sessionStorage.setItem('city', `${store.getState().user.profileForm.city}`);
              sessionStorage.setItem('address', `${store.getState().user.profileForm.address}`);
              sessionStorage.setItem('postalcode', `${store.getState().user.profileForm.postalCode}`);

              store.dispatch(updateProfileSuccess());
            })
            .catch((err) => {
              // console.log(err);
              store.dispatch(updateProfileError(['Erreur serveur !']));
            });
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case GET_USER_SERVICES_LIST:
      // console.log('récupération de la liste des services de cet utilisateur');
      axios({
        method: 'get',
        url: `${baseURL}/api/services/user/${sessionStorage.getItem('id')}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getUserServicesListSuccess(res.data));
        })
        .catch((err) => {
          // console.log(err);
          store.dispatch(getUserServicesListError());
        });
      break;
    default:
      return next(action);
  }
};

export default userMiddleware;
