import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Container, Header, Segment, Form, Image, Divider, Button, Message, Input,
} from 'semantic-ui-react';

import logo from '../../../assets/images/logo.png';
import './styles.scss';

const Profil = ({
  userInfos,
  onDeleteAccount,
  error,
  isLogged,
  getUser,
  userId,
  profile,
}) => {
  const history = useHistory();

  // Called everytime 'isLogged' changes
  useEffect(() => {
    // Redirect to page '/home' after submit
    // We redirect to /home only if isLogged is true
    // console.log(userId);
    getUser(userId);
    if (!document.cookie.split(';').some((item) => item.trim().startsWith('token='))) history.push('/');
  }, [isLogged]);

  // console.log(userInfos);
  return (
    <Container>
      <Segment textAlign="center">
        <Header as="h1">Profil</Header>
        <Container className="service__details__avatar">
          <Image src={logo} size="small" />
          <Button className="profil__import__button" size="small" color="blue">Importer une photo</Button>
        </Container>
        <Container className="profil__name">
          <p>Prénom : <span>{profile.firstName} </span></p>
          <p>Nom : <span>{profile.lastName} </span></p>
          <p>Code postal : <span>{profile.postalCode} </span></p>
        </Container>
        <Divider horizontal>
          <Header as="h5">
            Infos
          </Header>
        </Divider>
        {/*  TODO - Add condition for form display */}
        <Container>
          <Form>
            <Form.Field>
              <Form.Input label="Prénom" placeholder={userInfos.firstname} />
            </Form.Field>
            <Form.Field>
              <Form.Input label="Nom" placeholder={userInfos.lastname} />
            </Form.Field>
            <Form.Field>
              <Form.Input label="Adresse" placeholder={userInfos.address} />
            </Form.Field>
            <Form.Field>
              <Form.Input label="Email" placeholder={userInfos.email} />
            </Form.Field>
            <Button className="profil__change__button" size="small" type="submit">Modifier</Button>
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
          <Message error hidden={!error} content="Une erreur est survenue lors de la suppression de votre compte." />
          <Button
            className="profil__delete__button"
            size="small"
            color="red"
            onClick={() => onDeleteAccount(userInfos.id)}
          >
            Supprimer le compte
          </Button>
        </Container>
      </Segment>
    </Container>
  );
};

Profil.propTypes = {
  userInfos: PropTypes.shape({
    email: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    id: PropTypes.number,
    address: PropTypes.string,
  }).isRequired,
  onDeleteAccount: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
};


export default Profil;
