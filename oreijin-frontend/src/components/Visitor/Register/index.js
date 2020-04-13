// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Geocoder from 'react-mapbox-gl-geocoder';
import {
  Header, Container, Segment, Form,
} from 'semantic-ui-react';
// == Import

import './styles.scss';

// == Composant
const Register = ({ form, onChangeField }) => (
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
              name="first_name"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.first_name}
            />
          </Form.Field>
          <Form.Field width={8}>
            <Form.Input
              required
              label="Nom"
              placeholder="Nom"
              type="text"
              name="last_name"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.last_name}
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
              name="pseudo"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.pseudo}
            />
          </Form.Field>
          <Form.Field required width={6}>
            <Form.Input
              required
              label="Date de naissance"
              placeholder="Date de naissance"
              type="date"
              name="birth_date"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.birth_date}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            type="email"
            name="email"
            onChange={(evt) => {
              onChangeField(evt.target.name, evt.target.value);
            }}
            value={form.email}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            required
            label="Mot de passe"
            placeholder="Mot de passe"
            type="password"
            name="password"
            onChange={(evt) => {
              onChangeField(evt.target.name, evt.target.value);
            }}
            value={form.password}
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
          name="location"
          control={Geocoder}
          label="Adresse Postale"
          viewport={{}}
          mapboxApiAccessToken="pk.eyJ1Ijoibm91Z2F6YWtpIiwiYSI6ImNrOG9uaG90NjA0MWEzZ242OWY5Z3o2ZGoifQ.lMw3p6r7TW0oBoxfMrzpFA"
          onSelected={(viewport, item) => {
            console.log(viewport, item);
            console.log(form);
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

Register.propTypes = {
  form: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    birth_date: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onChangeField: PropTypes.func.isRequired,
};
// == Export
export default Register;
