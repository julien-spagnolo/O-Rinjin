import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Container, Header, Segment, Form, Image, Divider, Button, Message,
} from 'semantic-ui-react';

import logo from '../../../assets/images/logo.png';
import './styles.scss';

const Profil = ({
  userInfos,
  onDeleteAccount,
  error,
  success,
  isLogged,
}) => {
  const history = useHistory();

  // Called everytime 'isLogged' changes
  useEffect(() => {
    // Redirect to page '/home' after submit
    // We redirect to /home only if isLogged is true
    if (!isLogged) history.push('/');
  }, [isLogged]);

  console.log(userInfos, error, success);
  return (
    <Container>
      <Segment textAlign="center">
        <Header as="h1">Profil</Header>
        <Container className="service__details__avatar">
          <Image src={logo} size="small" />
          <Button className="profil__import__button" size="small" color="blue">Importer une photo</Button>
        </Container>
        <Container className="profil__name">
          <p>Prénom : <span>{userInfos.firstname} </span></p>
          <p>Nom : <span>{userInfos.lastname} </span></p>
        </Container>
        <Divider horizontal>
          <Header as="h5">
            Infos
          </Header>
        </Divider>
        <Container>
          <Form>
            <Form.Field>
              <label>Prénom</label>
              <input placeholder={userInfos.firstname} />
            </Form.Field>
            <Form.Field>
              <label>Nom</label>
              <input placeholder={userInfos.lastname} />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder={userInfos.email} />
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
          <Message success hidden={!success} content="Votre compte a bien été supprimé" />
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
  }).isRequired,
  onDeleteAccount: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};


export default Profil;
