// == Import npm
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import {
  Header, Container, Segment, Form, Input
} from 'semantic-ui-react';
// == Import
import './styles.scss';

// == Composant
const Register = ({
  form, isTCChecked, onChangeField, onToggleTC, handleSubmit,
}) => (
  <Container>
    <Segment raised>
      <Header as="h1" dividing textAlign="center">Inscription</Header>
      <Form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}
      >
        <Form.Group>
          <Form.Field width={8}>
            <Form.Input
              required
              label="Prénom"
              placeholder="Prénom"
              type="text"
              name="firstname"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.firstname}
            />
          </Form.Field>
          <Form.Field width={8}>
            <Form.Input
              required
              label="Nom"
              placeholder="Nom"
              type="text"
              name="lastname"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.lastname}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field required width={10}>
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
          <Form.Field required width={6}>
            <Form.Input
              required
              label="Date de naissance"
              placeholder="Date de naissance"
              type="date"
              name="birthdate"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.birthdate}
            />
          </Form.Field>
        </Form.Group>
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
        <Form.Group>
          <Form.Field width="8">
            <Form.Input
              required
              label="Rue"
              placeholder="4 rue ..."
              type="text"
              name="address"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.address}
            />
          </Form.Field>
          <Form.Field width="4">
            <Form.Input
              required
              label="Ville"
              placeholder="Ville"
              type="text"
              name="city"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.city}
            />
          </Form.Field>
          <Form.Field width="4">
            <Form.Input
              required
              maxLength={5}
              label="Code Postal"
              placeholder="Code Postal"
              type="text"
              name="postalcode"
              onChange={(evt) => {
                onChangeField(evt.target.name, evt.target.value);
              }}
              value={form.postalcode}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Form.Checkbox
            required
            label="I agree to the Terms and Conditions"
            onChange={onToggleTC}
            checked={isTCChecked}
          />
        </Form.Field>
        <Form.Button type="submit" className="register__form__button">Soumettre</Form.Button>
      </Form>
    </Segment>
  </Container>
);

Register.propTypes = {
  form: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    address: PropTypes.string,
    city: PropTypes.string.isRequired,
    postalcode: PropTypes.string.isRequired,
  }).isRequired,
  isTCChecked: PropTypes.bool.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onToggleTC: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
// == Export
export default Register;
