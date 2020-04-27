/* eslint-disable camelcase */
import slugify from 'slugify';
import axios from 'axios';
import baseURL from '../axios';
import {
  GET_USER, getUserSuccess, getUserError,
  UPDATE_PROFILE, updateProfileSuccess, updateProfileError,
  GET_USER_SERVICES_LIST, getUserServicesListSuccess, getUserServicesListError,
} from '../actions/user';
import { UPLOAD_IMAGE } from '../actions/uploads';

import mapboxApiToken from '../../mapbox.config';

const uploadAvatar = (avatar) => {
  // console.log(action.payload);
  const timestamp = Date.now() / 1000;
  
  const formData = new FormData();
  formData.append('api_key', '917165839151738');
  formData.append('file', avatar);
  formData.append('timestamp', timestamp);
  formData.append('upload_preset', 'ewfjt9wc');
  // console.log(formData);

  return axios.post('https://api.cloudinary.com/v1_1/orinjin/image/upload', formData);
};

      
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER:
      // console.log(action.payload);
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
    case UPLOAD_IMAGE:
      // console.log(action.payload);
      uploadAvatar(action.payload)
        .then((res) => {
          console.log(res.data);
          axios({
            method: 'put',
            url: `${baseURL}/api/users/${store.getState().user.profile.id}`,
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
            data: {
              avatar: res.data.url,
            },
            withCredentials: true,
          })
            .then((response) => {
              console.log(response.data);
              sessionStorage.setItem('avatar', response.data.avatar);
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
    default:
      return next(action);
  }
};

export default userMiddleware;
