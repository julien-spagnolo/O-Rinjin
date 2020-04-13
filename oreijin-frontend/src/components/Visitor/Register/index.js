// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, Container, Segment, Form,
} from 'semantic-ui-react';
// == Import
import './styles.scss';

// == Composant
const Register = ({
  form, isTCChecked, onChangeField, onChangeFieldLocation, onToggleTC, handleSubmit,
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
                onChangeFieldLocation(evt.target.name, evt.target.value);
              }}
              value={form.location.address}
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
                onChangeFieldLocation(evt.target.name, evt.target.value);
              }}
              value={form.location.city}
            />
          </Form.Field>
          <Form.Field width="4">
            <Form.Input
              required
              maxLength={5}
              label="Code Postal"
              placeholder="Code Postal"
              type="text"
              name="postal_code"
              onChange={(evt) => {
                onChangeFieldLocation(evt.target.name, evt.target.value);
              }}
              value={form.location.postal_code}
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
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    birth_date: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    location: PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string.isRequired,
      postal_code: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isTCChecked: PropTypes.bool.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onToggleTC: PropTypes.func.isRequired,
  onChangeFieldLocation: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
// == Export
export default Register;
