import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Container, Header, Segment, Form, Image, Divider, Button, Message, Label, Input,
} from 'semantic-ui-react';

import Page404 from '../../404';
import Validator from '../../../validator';

import './styles.scss';

const Profil = ({
  onDeleteAccount,
  isError,
  isSuccess,
  isLogged,
  getUser,
  userId,
  profile,
  form,
  onChangeProfileField,
  onUpdateProfile,
  errors,
  notFound,
  uploadImage,
  avatar,

}) => {
  const history = useHistory();
  // Need to use useState because we can't have a file with redux
  const [file, setFile] = useState(null);

  // Called everytime 'isLogged' changes
  useEffect(() => {
    // Redirect to page '/home' after submit
    // We redirect to /home only if isLogged is true
    // console.log(userId);
    if (!isLogged) history.push('/');
    else getUser(userId);
  }, [isLogged, userId]);

  const fileInputRef = React.createRef();

  // console.log(userInfos);
  if (notFound) return <Page404 />;

  return (
    <Container>
      <Segment textAlign="center">
        <Header as="h1">Profil</Header>
        <Container className="service__details__avatar">
          <Image src={avatar} size="small" circular />
          {
            profile.email === sessionStorage.getItem('username') && (
              <Form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  // console.log('submit upload');
                  if (Validator.checkImageSize(file)) uploadImage(file);
                  else alert('Votre image est trop lourde. (2Mb max)');
                }}
              >
                <Button
                  content="Choisir une photo"
                  className="profil__import__button"
                  size="small"
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                />
                {
                  (file && !Validator.checkImageSize(file)) ? <Label basic color="red">Votre image est trop lourde. (2Mb max)</Label> : null
                }
                <input
                  ref={fileInputRef}
                  type="file"
                  hidden
                  accept=".jpg, .jpeg, .png"
                  name="avatar"
                  onChange={(evt) => {
                    // console.log(evt.target.files[0]);
                    // console.log(evt.target);
                    setFile(evt.target.files[0]);
                    // console.log(evt.target.files[0]);
                  }}
                />
                {
                  (file && Validator.checkImageSize(file)) ? <Button type="submit" content="Upload" size="small" /> : null
                }
              </Form>
            )
          }
        </Container>
        <Container className="profil__name">
          <p>Prénom : <span>{profile.firstName} </span></p>
          <p>Nom : <span>{profile.lastName} </span></p>
          <p>Code postal : <span>{profile.postalCode} </span></p>
        </Container>
        {
          profile.email === sessionStorage.getItem('username') && (
            <>
              <Divider horizontal>
                <Header as="h5">
                  Infos
                </Header>
              </Divider>
              {/*  TODO - Add condition for form display */}
              <Container>
                <Message
                  success
                  hidden={!isSuccess}
                  header="Inscription réussi !"
                  content="Allez sur la page de connexion !"
                />
                <Message
                  error
                  hidden={!isError}
                >
                  <Message.Header>L'inscription a échoué !</Message.Header>
                  {
                    errors.map((error) => (
                      <div key={error}>{error}</div>
                    ))
                  }
                </Message>
                <Form
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    if (Validator.checkProfileForm(form)) onUpdateProfile();
                    else console.log('Erreur edit profile');
                  }}
                >
                  <Form.Field>
                    {
                      !Validator.checkName(form.firstName) ? <Label basic color="red" pointing="below">Indiquez un prénom valide</Label> : null
                    }
                    <Form.Input
                      label="Prénom"
                      placeholder={profile.firstName}
                      value={form.firstName}
                      name="firstName"
                      onChange={(evt) => onChangeProfileField({
                        [evt.target.name]: evt.target.value,
                      })}
                    />
                  </Form.Field>
                  <Form.Field>
                    {
                      !Validator.checkName(form.lastName) ? <Label basic color="red" pointing="below">Indiquez un nom valide</Label> : null
                    }
                    <Form.Input
                      label="Nom"
                      placeholder={profile.lastName}
                      value={form.lastName}
                      name="lastName"
                      onChange={(evt) => onChangeProfileField({
                        [evt.target.name]: evt.target.value,
                      })}
                    />
                  </Form.Field>
                  <Form.Group>
                    <Form.Field width={8}>
                      <Form.Input
                        label="Adresse"
                        placeholder={profile.address}
                        value={form.address}
                        name="address"
                        onChange={(evt) => onChangeProfileField({
                          [evt.target.name]: evt.target.value,
                        })}
                      />
                      {
                        !Validator.checkAddress(form.address) ? <Label basic color="red" pointing>Indiquez une adresse valide.</Label> : null
                      }
                    </Form.Field>
                    <Form.Field width={4}>
                      <Form.Input
                        className="profile__form"
                        label="Ville"
                        placeholder={profile.city}
                        value={form.city}
                        name="city"
                        onChange={(evt) => onChangeProfileField({
                          [evt.target.name]: evt.target.value,
                        })}
                      />
                      {
                        !Validator.checkCity(form.city) ? <Label basic color="red" pointing>Indiquez une ville valide.</Label> : null
                      }
                    </Form.Field>
                    <Form.Field width={4}>
                      <Form.Input
                        className="profile__form"
                        label="Code Postal"
                        placeholder={profile.postalCode}
                        value={form.postalCode}
                        name="postalCode"
                        onChange={(evt) => onChangeProfileField({
                          [evt.target.name]: evt.target.value,
                        })}
                      />
                      {
                        !Validator.checkPostalCode(form.postalCode) ? <Label basic color="red" pointing>Indiquez un code postal valide</Label> : null
                      }
                    </Form.Field>
                  </Form.Group>
                  <Button
                    className="profil__change__button"
                    size="small"
                    type="submit"
                  >
                      Modifier
                  </Button>
                </Form>
              </Container>
              <Divider horizontal>
                <Header as="h5">
                  Suppression
                </Header>
              </Divider>
              <Container>
                <p>Attention</p>
                <p>
                  La suppression de votre compte est définitive.
                  Vous perdrez toutes les informations et les services liés à ce compte.
                </p>
                <Message error hidden={!isError} content="Une erreur est survenue lors de la suppression de votre compte." />
                <Button
                  className="profil__delete__button"
                  size="small"
                  color="red"
                  onClick={() => onDeleteAccount(parseInt(sessionStorage.getItem('id'), 10))}
                >
                  Supprimer le compte
                </Button>
              </Container>
            </>
          )
        }
      </Segment>
    </Container>
  );
};

Profil.propTypes = {
  onDeleteAccount: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  onChangeProfileField: PropTypes.func.isRequired,
  onUpdateProfile: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  notFound: PropTypes.bool.isRequired,
  uploadImage: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,

};


export default Profil;
