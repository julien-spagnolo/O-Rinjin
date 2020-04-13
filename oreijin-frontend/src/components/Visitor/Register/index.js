// == Import npm
import React from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
import {
  Header, Container, Segment, Form,
} from 'semantic-ui-react';
// == Import

import './styles.scss';

// == Composant
const Register = () => (
  <Container>
    <Segment raised>
      <Header as="h1" dividing textAlign="center">Inscription</Header>
      <Form>
        <Form.Group>
          <Form.Field width={8}>
            <Form.Input
              required
              label="Prénom"
              placeholder="Prénom"
              type="text"
            />
          </Form.Field>
          <Form.Field width={8}>
            <Form.Input
              required
              label="Nom"
              placeholder="Nom"
              type="text"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field width={10}>
            <Form.Input
              required
              label="Pseudo"
              placeholder="Pseudo"
              type="text"
            />
          </Form.Field>
          <Form.Field required width={6}>
            <Form.Input
              required
              label="Date de naissance"
              placeholder="Date de naissance"
              type="date"
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            type="email"
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            required
            label="Mot de passe"
            placeholder="Mot de passe"
            type="password"
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            required
            label="Vérification du mot de passe"
            placeholder="Vérification du mot de passe"
            type="password"
          />
        </Form.Field>
        <Form.Field
          required
          control={Geocoder}
          label="Adresse Postale"
          viewport={{}}
          mapboxApiAccessToken="pk.eyJ1Ijoibm91Z2F6YWtpIiwiYSI6ImNrOG9uaG90NjA0MWEzZ242OWY5Z3o2ZGoifQ.lMw3p6r7TW0oBoxfMrzpFA"
          onSelected={(viewport, item) => {
            console.log(viewport, item);
          }}
        />
        <Form.Field>
          <Form.Checkbox required label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Form.Button type="submit">Soumettre</Form.Button>
      </Form>
    </Segment>
  </Container>
);

// == Export
export default Register;
