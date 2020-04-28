import axios from 'axios';
import baseURL from '../axios';
import { UPLOAD_IMAGE, UPLOAD_SERVICE_IMAGE } from '../actions/uploads';
import { updateProfileSuccess, updateProfileError, getUser } from '../actions/user';
import { addService } from '../actions/service';

const AVATAR_PRESET = 'ewfjt9wc';
const IMAGE_PRESET = 'o2qooexr';

const uploadImage = (image, uploadPreset) => {
  // console.log(action.payload);
  const timestamp = Date.now() / 1000;

  const formData = new FormData();
  formData.append('api_key', '917165839151738');
  formData.append('file', image);
  formData.append('timestamp', timestamp);
  formData.append('upload_preset', uploadPreset);
  // console.log(formData);

  return axios.post('https://api.cloudinary.com/v1_1/orinjin/image/upload', formData);
};

const uploadsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      // console.log(action.payload);
      uploadImage(action.payload, AVATAR_PRESET)
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
              store.dispatch(getUser(store.getState().user.profile.id));
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
    case UPLOAD_SERVICE_IMAGE:
      console.log('//== middleware upload image');
      uploadImage(action.payload, IMAGE_PRESET)
        .then((res) => {
          store.dispatch(addService({
            user: parseInt(sessionStorage.getItem('id'), 10),
            image: res.data.url,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    default:
      return next(action);
  }
};
  
  export default uploadsMiddleware;
